import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-char-build-start',
  templateUrl: './char-build-start.component.html',
  styleUrls: ['./char-build-start.component.css']
})
export class CharBuildStartComponent implements OnInit {
  @Input() charName: String;
  @Input() startingLevel: Number;
  @Output() startComplete: EventEmitter<any> = new EventEmitter();
  error: String;

  constructor() { }

  ngOnInit() {
  }

  startGo() {
    if(!this.charName || !this.startingLevel) {this.error = "Omg fill everything in!"}
      else {
        this.error = "";
        this.startComplete.emit({charName: this.charName, startingLevel: this.startingLevel});
      }
  }

}
