import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import {CharClassService} from '../../../../services/char-class.service';

@Component({
  selector: 'app-char-build-class',
  templateUrl: './char-build-class.component.html',
  styleUrls: ['./char-build-class.component.css','../../char-build-common.css']
})
export class CharBuildClassComponent implements OnInit {
  classes: Array<any>;
  viewedClass: any;
  viewedClassFeatures: Array<any>;
  viewedClassDecisions: any[] = [];
  showDecisions: boolean;
  decisionsMade: {name: string, context: string, effect: any}[] = [];
  selectedClasses: Array<any> = [];
  selectedClassNames: string[] = [];
  activeClassFeatures: any[] = [];
  showDesc: any = {};
  multiclass: boolean = false;
  mcError: string;

  private _charLevel: number;

  @Input() classSummary: Array<any>;
  @Input() skillsData: Array<any>;
  @Input() proficiencies: Array<any>;

  @Input() set charLevel(charLevel: number) {
    this._charLevel = charLevel;
    if(this.selectedClasses.length > 1) {
      for (let i=0;i<this.selectedClasses.length;i++) {
        if(!this.classSummary.find(c => c.className == this.selectedClasses[i].className)) 
          this.selectedClasses.splice(i,1);           
      }
    }
    if(this.charLevel == 1) this.multiclass = false;
    this.updateClassNames();
    this.activeClassFeatures = this.charClassService.activeFeatures(this.selectedClasses);
  }
  get charLevel(): number {return this._charLevel}

  @Output() classUpdate: EventEmitter<any> = new EventEmitter();
  @Output() classComplete: EventEmitter<boolean> = new EventEmitter();

  constructor(private dataService: DataService, private charClassService: CharClassService) { }

  ngOnInit() {
    this.dataService.getClasses().subscribe(classes => {
      this.classes = classes;
    }, err => {console.log(err); return false;});
  }

  ngOnChanges() {this.validate()}

  log() {console.log(this.activeClassFeatures)}

  viewClass(clickedClass) {
    this.viewedClass = clickedClass;
    this.showDesc = {};
    if(this.viewedClass.decisions) { // <-- alter to check class 
      this.viewedClassDecisions = this.viewedClass.decisions.filter(d => d.context == 'class')
    } else {this.viewedClassDecisions = []}
    this.viewedClassFeatures = this.charClassService.oneClassFeatures(this.viewedClass.className);
    this.viewedClassFeatures.sort((a,b) => (a.level > b.level) ? 1 : -1);
    for (let i=0;i<this.viewedClassFeatures.length;i++) this.showDesc[i] = false;    
  }

  logAll() {
    let bucket = [];
    for (let propName in this) {bucket.push({name: propName, value: this[propName]})}
    console.log(bucket);
  }

  selectClass(selectedClass) {
    if(this.multiclass) {
      if(this.checkMCLevels(1) && !this.classIsSelected(selectedClass.className)) {
        selectedClass.classLevel = 1;
        this.selectedClasses.push(selectedClass);
        this.updateClassNames();
        this.activeClassFeatures = this.charClassService.activeFeatures(this.selectedClasses);
        this.updateDecisionsUI();
        this.sendUpdate();
      }
    } else {
      selectedClass.classLevel = this.charLevel;
      this.selectedClasses = [selectedClass];
      this.decisionsMade = [];
      this.updateClassNames();
      this.activeClassFeatures = this.charClassService.activeFeatures(this.selectedClasses);
      this.updateDecisionsUI();
      this.sendUpdate();
    }
    this.validate();
  }

  mcToggle() {
    if(!this.multiclass && this.selectedClasses.length) {
      this.selectedClasses = [this.selectedClasses[0]];
      this.selectedClasses[0].classLevel = 1;
      this.sendUpdate();
      this.updateClassNames();
    }
    this.validate();
  }

  checkMCLevels(inc) {
    let levelCount = 0;
    this.selectedClasses.map(c => c.classLevel).forEach(l => levelCount += l);
    if(levelCount + inc > this.charLevel) {this.mcError = "Too many levels"; return false;} 
      else {this.mcError = ""; return true;}
  }

  inc(className,inc) {
    if(this.checkMCLevels(inc)) {
      let targetClass = this.selectedClasses.find(c => c.className == className);
      if(targetClass.classLevel + inc > 0) {
        targetClass.classLevel += inc;
        this.activeClassFeatures = this.charClassService.activeFeatures(this.selectedClasses);
        this.sendUpdate();
      } else if (targetClass.classLevel + inc == 0) {
        this.selectedClasses = this.selectedClasses.filter(c => c.className != targetClass.className);
        this.decisionsMade = this.decisionsMade.filter(d => d.effect.value.className != targetClass.className);
        this.activeClassFeatures = this.charClassService.activeFeatures(this.selectedClasses);
        this.sendUpdate();
        this.updateClassNames();
      }
    }
    this.validate();
  }

  validate() {
    let totalClassLevels = 0;
    for (let i=0;i<this.selectedClasses.length;i++) totalClassLevels += this.selectedClasses[i].classLevel;
    if(totalClassLevels == this.charLevel && this.decisionsComplete()) {this.classComplete.emit(true)} 
      else {this.classComplete.emit(false)}
  }

  sendUpdate() {
    this.classUpdate.emit({
      classes: this.selectedClasses,
      decisionsMade: this.decisionsMade,
      decisionsToMake: this.getDecisionsToMake(),
      passiveEffects: this.charClassService.getPassiveEffects(this.activeClassFeatures,this.selectedClasses)
    })
  }

  hideShow(i) {this.showDesc[i] = !this.showDesc[i]}
  updateClassNames() {this.selectedClassNames = this.selectedClasses.map(c => c.className)}
  classIsSelected(className) {return (this.selectedClassNames as any).includes(className)}

  updateDecisionsUI() {
    if (!this.viewedClassDecisions) {
      this.showDecisions = false; 
      this.decisionsMade = null;
    } else {this.showDecisions = true}
  }

  makeDecision(decisionName,selectElement) {
    const thisDecision = this.viewedClassDecisions.find((d) => d.name == decisionName);
    let decisionObject = {
      name: thisDecision.name, 
      context: thisDecision.context,
      effect: thisDecision.selectOptions[selectElement.selectedIndex - 1].effect
    }
    if(this.decisionsMade.find(d => d.name === decisionName)) {
      this.decisionsMade = this.decisionsMade.filter(d => d.name != decisionName);
    }
    this.decisionsMade.push(decisionObject);
    if(this.decisionsComplete()) {this.sendUpdate()}
    this.validate();
  }

  getDecisionsToMake() {
    let decisionsArray = [];
    this.selectedClasses.forEach((c) => {
      if(c.decisions) decisionsArray.push(c.decisions.filter(d => d.context != 'class'))
    });
    return decisionsArray;
  }

  decisionsComplete() {
    const decisionNames = this.viewedClassDecisions.map(d => d.name);
    for (let i=0;i<decisionNames.length;i++) {
      if(!this.decisionsMade.find(d => d.name === decisionNames[i])) {return false}
    }
    return true;
  }

  createSkillList(classSkillArray) {
    return classSkillArray.map((s) => {
      const skill = this.skillsData.find(skill => skill.skillId == s);
      return `${skill.skillName} (${skill.ASName})`
    }).join(', ')
  }

  createProfList(profArray) {
    return profArray.map((p) => {
        return this.proficiencies.find(prof => prof.id == p).profName
    }).join(', ')
  }
}