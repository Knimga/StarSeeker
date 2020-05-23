import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-char-build-start',
  templateUrl: './char-build-start.component.html',
  styleUrls: ['./char-build-start.component.css']
})
export class CharBuildStartComponent implements OnInit {
  charName: String;
  startingLevel: Number = 1;
  error: String;

  startData: Function = () => {
    return {charName: this.charName, startingLevel: this.startingLevel}
  }

  @Output() startComplete: EventEmitter<Boolean> = new EventEmitter();
  @Output() startUpdate: EventEmitter<any> = new EventEmitter();
  @Output() startGo: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  go() {if(this.validate()) this.startGo.emit(this.startData())}

  name() {
    this.charName = this.charName.charAt(0).toUpperCase() + this.charName.slice(1);
    this.updateParent();
  }

  updateParent() {if(this.validate()) this.startUpdate.emit(this.startData())}

  levelInc(value) {
    const newLevel = this.startingLevel + value;
    if(newLevel > 0 && newLevel < 21) {
      this.startingLevel = newLevel;
      this.updateParent();
    }
  }

  validate() {
    if(!this.charName) {
      this.error = "Provide a character name";
      this.startComplete.emit(false);
      this.startUpdate.emit(this.startData());
      return false;
    } else {
      this.error = "";
      this.startComplete.emit(true);
      return true;
    }
  }

}
