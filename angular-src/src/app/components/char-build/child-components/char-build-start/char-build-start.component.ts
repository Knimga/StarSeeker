import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-char-build-start',
  templateUrl: './char-build-start.component.html',
  styleUrls: ['./char-build-start.component.css']
})
export class CharBuildStartComponent implements OnInit {
  charName: String;
  startingLevel: Number = 1;
  error: String;

  @Output() startComplete: EventEmitter<any> = new EventEmitter();
  @Output() startUpdate: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  startGo() {
    if(this.validate()) 
      this.startComplete.emit({charName: this.charName, startingLevel: this.startingLevel});
  }

  inc(value) {
    let newLevel = this.startingLevel + value;
    if(newLevel > 0 && newLevel < 21) {
      this.startingLevel = newLevel;
      this.updateParent();
    }
  }

  updateParent() {
    if(this.validate()) 
      this.startUpdate.emit({charName: this.charName, startingLevel: this.startingLevel})
  }

  validate() {
    if(!this.charName) {this.error = "Provide a character name"; return false;}
      else {this.error = ""; return true;}
  }

}
