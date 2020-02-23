import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-char-build-tracker',
  templateUrl: './char-build-tracker.component.html',
  styleUrls: ['./char-build-tracker.component.css']
})
export class CharBuildTrackerComponent implements OnInit {
  @Input() charObject: any = {};

  constructor() { }

  ngOnInit() {
  }

  classString() {
    if(this.charObject.class) {
      if(this.charObject.class.length == 1) {return this.charObject.class[0].className}
        else {return this.charObject.class.map(c => `${c.className} (${c.classLevel})`).join(', ')}
    }
  }

  ASMod(abilityScore) {return Math.floor((abilityScore - 10) / 2)}

}
