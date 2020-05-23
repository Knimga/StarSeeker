import { Component, OnInit, Input } from '@angular/core';
import {CharClassService} from '../../../../services/char-class.service';

@Component({
  selector: 'app-char-build-tracker',
  templateUrl: './char-build-tracker.component.html',
  styleUrls: ['./char-build-tracker.component.css']
})
export class CharBuildTrackerComponent implements OnInit {
  @Input() charObject: any = {};
  @Input() skillsData: Array<any>;

  @Input() set classes(classes: Array<any>) {
    if(classes != this._classes) {
      this._classes = classes;
      this.refreshCurrentFeatures();
    }
  }
  get classes(): Array<any> {return this._classes}
  private _classes: Array<any> = [];

  currentFeatures: Array<any>;

  constructor(private charClassService: CharClassService) {}

  ngOnInit() {}

  log() {console.log(this.currentFeatures)}

  refreshCurrentFeatures() {
    if(this.classes.length) {
      let filteredClassFeatures = [];
      for (let i=0;i<this.classes.length;i++) {
        const thisClassFeatures = this.charClassService.oneClassFeatures(this.classes[i].className);
        filteredClassFeatures = [...filteredClassFeatures, ...thisClassFeatures];
      }
      filteredClassFeatures.sort((a,b) => (a.level > b.level) ? 1 : -1);
      this.currentFeatures = filteredClassFeatures;
    } else {this.currentFeatures = []}
  }

  classString() {
    if(this.charObject.classes) {
      if(this.charObject.classes.length == 1) {return this.charObject.classes[0].className}
        else {return this.charObject.classes.map(c => `${c.className} (${c.classLevel})`).join(', ')}
    }
  }

  getClassLevel(className) {return this.classes.find(c => c.className == className).classLevel}

  ASMod(abilityScore) {return Math.floor((abilityScore - 10) / 2)}

}
