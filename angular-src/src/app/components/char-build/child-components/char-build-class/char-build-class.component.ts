import { Component, OnInit, Output, Input, EventEmitter, SimpleChanges } from '@angular/core';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-char-build-class',
  templateUrl: './char-build-class.component.html',
  styleUrls: ['./char-build-class.component.css','../../char-build-common.css']
})
export class CharBuildClassComponent implements OnInit {
  classes: Object;
  viewedClass: any;
  viewedClassDecisions: any[] = [];
  showDecisions: Boolean;
  decisionsMade: {name: String, context: String, target: String, value: any}[] = [];
  selectedClasses: any[] = [];
  selectedClassNames: String[] = [];
  showDesc: any = {};
  multiclass: boolean = false;
  mcError: String;

  @Input() charLevel: Number;
  @Input() skillsData: any;

  @Output() classUpdate: EventEmitter<any> = new EventEmitter();
  @Output() classComplete: EventEmitter<Boolean> = new EventEmitter();

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getClassDesc().subscribe(classDesc => {
      this.classes = classDesc;
    }, err => {console.log(err); return false;});
  }

  viewClass(clickedClass) {
    this.viewedClass = clickedClass;
    this.showDesc = {};

    if(this.viewedClass.decisions) {
      this.viewedClassDecisions = this.viewedClass.decisions.filter(d => d.context == 'class')
    } else {this.viewedClassDecisions = []}

    let length = this.viewedClass.classFeatures.length;
    for (let i=0;i<length;i++) {this.showDesc[i] = false}
  }

  selectClass(selectedClass) {
    if(this.multiclass) {
      if(this.checkMCLevels(1) && !this.classIsSelected(selectedClass.className)) {
        selectedClass.classLevel = 1;
        this.selectedClasses.push(selectedClass);
        this.updateClassNames();
        this.updateDecisionsUI();
        this.sendUpdate();
      }
    } else {
      selectedClass.classLevel = this.charLevel;
      this.selectedClasses = [selectedClass];
      this.updateClassNames();
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
        this.sendUpdate();
      } else if (targetClass.classLevel + inc == 0) {
        this.selectedClasses = this.selectedClasses.filter(c => c.className != targetClass.className);
        this.updateClassNames();
      }
    }
    this.validate();
  }

  validate() {
    let totalClassLevels = 0;
    for (let i=0;i<this.selectedClasses.length;i++) {totalClassLevels += this.selectedClasses[i].classLevel}
    if(totalClassLevels == this.charLevel && this.decisionsComplete()) 
      {this.classComplete.emit(true);} 
      else {this.classComplete.emit(false);}
  }

  sendUpdate() {
    this.classUpdate.emit({
      class: this.selectedClasses,
      decisionsMade: this.decisionsMade,
      decisionsToMake: this.getDecisionsToMake()
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
    let thisDecision = this.viewedClassDecisions.find((d) => d.name == decisionName);
    let decisionEffect = thisDecision.selectOptions[selectElement.selectedIndex - 1].effect;
  
    let decisionObject = {
      name: thisDecision.name, 
      context: thisDecision.context,
      target: decisionEffect.target,
      value: decisionEffect.value
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
    let decisionNames = this.viewedClassDecisions.map(d => d.name);
    for (let i=0;i<decisionNames.length;i++) {
      if(!this.decisionsMade.find(d => d.name === decisionNames[i])) {return false}
    }
    return true;
  }

  createSkillList(classSkillArray) {
    return classSkillArray.map((s) => {
      let skillObject = this.skillsData.find(skill => skill.skillId == s);
      return `${skillObject.skillName} (${skillObject.ASName})`
    }).join(', ');
  }

}
