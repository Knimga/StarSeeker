import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CharClassService} from '../../../../services/char-class.service';

@Component({
  selector: 'app-char-build-class-choices',
  templateUrl: './char-build-class-choices.component.html',
  styleUrls: ['./char-build-class-choices.component.css','../../char-build-common.css']
})
export class CharBuildClassChoicesComponent implements OnInit {
  decisionTracker: any = [];
  clickedId: string = '';
  clicked: {className: string, decisionName: string, level: number};
  selectionList: {
    options: Array<any>,
    selectionCount: number,
    selectLabel: string
  };
  showDesc: any = {};

  filteredFeatures: Array<any>;
  filteredAbilities: Array<any>;

  @Output() classChoicesComplete: EventEmitter<boolean> = new EventEmitter();
  @Output() classChoicesUpdate: EventEmitter<Array<any>> = new EventEmitter();

  @Input() skillsData: Array<any>;
  @Input() classAbilities: Array<any>;

  @Input() set classes(classes: Array<any>) {
    if(classes != this._classes) {
      this._classes = classes;
      this.resetSelectionList();
      this.filterData();
      this.refreshDecisionTracker();
    }
  }
  get classes(): Array<any> {return this._classes}
  private _classes: Array<any> = [];

  constructor(private charClassService: CharClassService) {}

  ngOnInit() {this.resetSelectionList()}

  resetSelectionList() {this.selectionList = {options: [], selectionCount: 1, selectLabel: ''}}

  log() {console.log(this.decisionTracker)}

  refreshDecisionTracker() {
    if(this.classes.length) {
      let decisionTracker = [];
      for (let i=0;i<this.classes.length;i++) {
        const className = this.classes[i].className, classLevel = this.classes[i].classLevel;
        const decisions = Object.assign([],this.filteredFeatures.filter(f => f.className == className));
        let trackerObject = {className: className, classLevel: classLevel, decisions: []};
        if(decisions.length) {
          for (let d=0;d<decisions.length;d++) {
            let decision = {name: decisions[d].featureName, id: decisions[d].id, slots: []} 
            let lvlsRcvd = JSON.parse(decisions[d].levelsReceived).filter(l => l <= classLevel);
            for (let l=0;l<lvlsRcvd.length;l++) {decision.slots.push({level: lvlsRcvd[l], selection: null})}
            trackerObject.decisions.push(decision);
          }
        }
        decisionTracker.push(trackerObject);
      }
      this.decisionTracker = decisionTracker;
      this.classChoicesValidate();
    } else {this.decisionTracker = []}
    this.clickedId = '';
  }

  filterData() { //so that find statements don't have to search through everything ever
    this.filteredFeatures = [], this.filteredAbilities = [];
    for (let i=0;i<this.classes.length;i++) {
      const className = this.classes[i].className, classLevel = this.classes[i].classLevel;
      let features = Object.assign([],this.charClassService.featuresWithDecisions(className));
      features = features.filter(f => JSON.parse(f.levelsReceived).some(l => classLevel >= l));
      let abilities = Object.assign([],this.classAbilities.filter(a => a.className == className));
      abilities = abilities.filter(a => (a.level) ? Number(a.level) <= classLevel : true);
      this.filteredFeatures = [...this.filteredFeatures, ...features];
      this.filteredAbilities = [...this.filteredAbilities, ...abilities];
    }
  }

  clickSlot(className,decision,level) {
    this.clickedId = this.createId(decision.name,level);
    this.clicked = {className: className, decisionName: decision.name, level: level};
    this.populateSelections(decision.id,level);
  }

  populateSelections(featureId,level) {
    this.showDesc = {};
    const feature = this.filteredFeatures.find(f => f.id == featureId);
    let options; const label = 'SELECT ONE';
    switch (feature.decisionType) {
      case 'ability': 
        options = this.filteredAbilities.filter(a => a.featureId == feature.id && ((a.level) ? a.level <= level : true));
        break;
      case 'skillList': 
        options = this.skillSelectionList(feature.skillIds,feature.featureName);
        break;
      default: break;
    }
    this.selectionList = {options: options, selectionCount: 1, selectLabel: label};
    for (let i=0;i<this.selectionList.options.length;i++) {this.showDesc[i] = false}
  }

  selectAbility(abilityObject) {
    if(this.canSelect(abilityObject)) {
      this.decisionTracker
        .find(c => c.className == this.clicked.className).decisions
          .find(d => d.name == this.clicked.decisionName).slots
            .find(s => s.level == this.clicked.level).selection = abilityObject;
    }
    this.classChoicesValidate();
  }

  removeAbility(className,decisionName,level) {
    this.decisionTracker.find(c => c.className == className).decisions
      .find(d => d.name == decisionName).slots
        .find(s => s.level == level).selection = null;
    this.classChoicesValidate();
  }

  canSelect(abilityObject) {
    let tests = [];
    if(abilityObject.id) tests.push(this.timesChosen(abilityObject.id) < (abilityObject.stack ? abilityObject.stack : 1));
    if(abilityObject.preReqs) JSON.parse(abilityObject.preReqs).forEach(p => tests.push(this.timesChosen(p) > 0));
    return (tests.some(t => !t)) ? false : true;
  }

  hasRemoveOption(className,decision,level) {
    const tests = [
      this.isClicked(decision.name,level), 
      this.selectionFilled(className,decision.name,level),
      !this.isPreReqToOther(className,decision.name,level)
    ];
    return (tests.some(t => !t)) ? false : true;
  }

  isPreReqToOther(className,decisionName,level) {//i.e. is this a preReq to another selected ability?
    const ability = this.getSelection(className,decisionName,level);
    if(ability) {
      let preReqIds = [];
      for (let c=0;c<this.decisionTracker.length;c++) {
        for (let d=0;d<this.decisionTracker[c].decisions.length;d++) {
          for (let s=0;s<this.decisionTracker[c].decisions[d].slots.length;s++) {
            if (this.decisionTracker[c].decisions[d].slots[s].selection) {
              let ability = this.decisionTracker[c].decisions[d].slots[s].selection;
              if(ability.preReqs) preReqIds = [...preReqIds, ...JSON.parse(ability.preReqs)];
            }
          }
        }
      }
      return (preReqIds.indexOf(ability.id) != -1) ? true : false;
    } else {return false}
    
  }

  timesChosen(abilityId) {
    let counter = 0;
    for (let c=0;c<this.decisionTracker.length;c++) {
      for (let d=0;d<this.decisionTracker[c].decisions.length;d++) {
        for (let s=0;s<this.decisionTracker[c].decisions[d].slots.length;s++) {
          if (this.decisionTracker[c].decisions[d].slots[s].selection && !this.isClicked(this.decisionTracker[c].decisions[d].name,this.decisionTracker[c].decisions[d].slots[s].level))
            if (this.decisionTracker[c].decisions[d].slots[s].selection.id == abilityId) counter++
        }
      }
    }
    return counter;
  }

  selectionFilled(className,decisionName,level) {return (this.getSelection(className,decisionName,level)) ? true : false}

  getSelection(className,decisionName,level) {
    return this.decisionTracker
      .find(c => c.className == className).decisions
        .find(d => d.name == decisionName).slots
          .find(s => s.level == level).selection
  }

  noChoicesToMake() {
    let counter = 0;
    for (let c=0;c<this.decisionTracker.length;c++) {
      for (let d=0;d<this.decisionTracker[c].decisions.length;d++) {
        for (let s=0;s<this.decisionTracker[c].decisions[d].slots.length;s++) counter++
      }
    }
    return (counter) ? false : true;
  }

  classChoicesValidate() {
    let boolean = true;
    for (let c=0;c<this.decisionTracker.length;c++) {
      for (let d=0;d<this.decisionTracker[c].decisions.length;d++) {
        for (let s=0;s<this.decisionTracker[c].decisions[d].slots.length;s++) {
          if (!this.decisionTracker[c].decisions[d].slots[s].selection) boolean = false
        }
      }
    }
    this.classChoicesComplete.emit(boolean);
    this.sendToParent();
    return boolean;
  }

  sendToParent() {
    let abilities = [];
    for (let c=0;c<this.decisionTracker.length;c++) {
      for (let d=0;d<this.decisionTracker[c].decisions.length;d++) {
        for (let s=0;s<this.decisionTracker[c].decisions[d].slots.length;s++) {
          if (this.decisionTracker[c].decisions[d].slots[s].selection) {
            abilities.push(this.decisionTracker[c].decisions[d].slots[s].selection);
          }
        }
      }
    }
    this.classChoicesUpdate.emit(abilities);
  }

  skillSelectionList(skillIdArray,featureName) {
    skillIdArray = JSON.parse(skillIdArray);
    let options = [];
    for (let i=0;i<skillIdArray.length;i++) {
      let skill = this.skillsData.find(s => s.skillId == skillIdArray[i]);
      options.push({featureName: featureName, optionName: `${skill.skillName} (${skill.ASName})`});
    }
    return options;
  }

  slotPlaceholderText(decisionName,slotLevel) {
    return (this.isClicked(decisionName,slotLevel)) ? this.selectionList.selectLabel : 'Click to begin...'
  }

  hideShow(i) {this.showDesc[i] = !this.showDesc[i]}

  createId(decisionName,level) {return (decisionName + level).toString().replace(/\s/g, '')}

  isClicked(decisionName,slotLevel) {return this.clickedId == this.createId(decisionName,slotLevel)}

  classLevel(className) {return this.classes.find(c => c.className == className).classLevel}
  
  numToString(num) {return ['ONE','TWO','THREE','FOUR','FIVE'][num - 1]}

  solarianModeClass(solarianMode) {return (solarianMode == 'Photon') ? 'orange' : 'purple'}
}