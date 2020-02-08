import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-char-build-race',
  templateUrl: './char-build-race.component.html',
  styleUrls: ['./char-build-race.component.css']
})
export class CharBuildRaceComponent implements OnInit {
  races: Object;
  viewedRace: Object;
  selectedRace: any = {};
  showSubdecisions: Boolean;
  subdecisions: {[k: string]: any} = {};

  @ViewChild('raceList') raceList: ElementRef;
  @Output() raceComplete: EventEmitter<any> = new EventEmitter();

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.showSubdecisions = false;
    this.dataService.getRaceDesc().subscribe(raceDesc => {
      this.races = raceDesc;
    }, err => {console.log(err);return false;});
  }

  viewRace(race) {this.viewedRace = race}

  selectRace(race) {
    this.selectedRace = race;
    if (!this.selectedRace.subdecisions) {
      this.showSubdecisions = false; this.subdecisions = null;
      this.raceComplete.emit({race: this.selectedRace, subdecisions: this.subdecisions});
    } else {
      this.selectedRace.subdecisions.forEach((d) => {
        this.subdecisions[d.decisionName] = null;
      });
      this.showSubdecisions = true;
    }
  }

  makeSubdecision(decisionName,selectElement) {
    let decisionObject = this.selectedRace.subdecisions.find((d) => {return d.decisionName == decisionName});
    let optionObject = decisionObject.selectOptions[selectElement.selectedIndex - 1];
    this.subdecisions[decisionName] = optionObject;
    if(this.subdecisionsComplete()) {
      this.raceComplete.emit({race: this.selectedRace, subdecisions: this.subdecisions});
    }
  }

  subdecisionsComplete() {
    for (let decision in this.subdecisions) {if(!decision) return false}
    return true;
  }

}
