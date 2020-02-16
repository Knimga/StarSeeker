import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-char-build-class',
  templateUrl: './char-build-class.component.html',
  styleUrls: ['./char-build-class.component.css','../../char-build-common.css']
})
export class CharBuildClassComponent implements OnInit {
  classes: Object;
  viewedClass: any;
  selectedClasses: any[] = [];
  selectedClassNames: String[] = [];
  showDesc: any = {};
  multiclass: boolean = false;
  mcError: String;

  @Input() charLevel: Number;
  @Input() skillsData: any;

  @Output() classComplete: EventEmitter<any> = new EventEmitter();

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getClassDesc().subscribe(classDesc => {
      this.classes = classDesc;
    }, err => {console.log(err);return false;});
  }

  viewClass(clickedClass) {
    this.viewedClass = clickedClass;
    this.showDesc = {};
    let length = this.viewedClass.classFeatures.length;
    for (let i=0;i<length;i++) {this.showDesc[i] = false}
  }

  selectClass(selectedClass) {
    if(this.multiclass) {
      if(this.checkMCLevels(1) && !(this.selectedClassNames as any).includes(selectedClass.className)) {
        selectedClass.classLevel = 1;
        this.selectedClasses.push(selectedClass);
        this.updateClassNames();
      }
    } else {
      selectedClass.classLevel = this.charLevel;
      this.selectedClasses = [selectedClass];
      this.updateClassNames();
      this.classComplete.emit({class: this.selectedClasses});
    }
    console.log(this.selectedClasses);
  }

  hideShow(i) {this.showDesc[i] = !this.showDesc[i]}

  updateClassNames() {this.selectedClassNames = this.selectedClasses.map(c => c.className);}

  mcToggle() {
    if(!this.multiclass && this.selectedClasses.length) {
      this.selectedClasses = [this.selectedClasses[0]];
      this.updateClassNames();
    }
    console.log(this.selectedClasses);
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
      if(targetClass.classLevel + inc > 0) targetClass.classLevel += inc;
    }
  }

  createSkillList(classSkillArray) {
    return classSkillArray.map((s) => {
      let skillObject = this.skillsData.find(skill => skill.skillId == s);
      return `${skillObject.skillName} (${skillObject.ASName})`
    }).join(', ');
  }

}
