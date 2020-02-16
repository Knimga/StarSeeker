import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-char-build-race',
  templateUrl: './char-build-race.component.html',
  styleUrls: ['./char-build-race.component.css','../../char-build-common.css']
})
export class CharBuildRaceComponent implements OnInit {
  races: Object;
  viewedRace: any;
  viewedRaceDecisions: any[];
  selectedRace: any = {};
  showDecisions: Boolean;
  decisionsMade: {decisionName: String, selectedOption: Object}[] = [];
  showDesc: any = {};

  @Output() raceComplete: EventEmitter<any> = new EventEmitter();

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.showDecisions = false;
    this.dataService.getRaceDesc().subscribe(raceDesc => {
      this.races = raceDesc;
    }, err => {console.log(err);return false;});
  }

  viewRace(race) {
    this.viewedRace = race;
    this.showDesc = {};

    if(this.viewedRace.decisions) {
      this.viewedRaceDecisions = this.viewedRace.decisions.filter(d => d.context == 'race')
    } else {this.viewedRaceDecisions = null}

    let length = this.viewedRace.racialAbilities.length;
    for (let i=0;i<length;i++) {this.showDesc[i] = false}
  }

  selectRace(race) {
    this.selectedRace = race;
    if (!this.viewedRaceDecisions) {
      this.showDecisions = false; 
      this.decisionsMade = null;
      this.raceComplete.emit({race: this.selectedRace, decisionsMade: null, decisionsRemaining: null});
    } else {
      this.raceComplete.emit(false);
      this.showDecisions = true;
      this.decisionsMade = [];
    }
  }

  hideShow(i) {this.showDesc[i] = !this.showDesc[i]}

  makeDecision(decisionName,selectElement) {
    let decisionObject = this.viewedRaceDecisions.find((d) => d.name == decisionName);
    let selectedOption = decisionObject.selectOptions[selectElement.selectedIndex - 1];
    
    if(this.decisionsMade.find(d => d.decisionName === decisionName)) {
      let existingDecision = this.decisionsMade.find((d) => d.decisionName === decisionName);
      existingDecision.selectedOption = selectedOption;
    } else {
      this.decisionsMade.push({decisionName: decisionName, selectedOption: selectedOption});
    }
    
    if(this.decisionsComplete()) {
      this.raceComplete.emit({
        race: this.selectedRace,
        decisionsMade: this.decisionsMade,
        decisionsRemaining: this.selectedRace.decisions.filter(d => d.context != 'race')
      });
    }
  }

  decisionsComplete() {
    let decisionNames = this.viewedRaceDecisions.map(d => d.name);
    for (let i=0;i<decisionNames.length;i++) {
      if(!this.decisionsMade.find(d => d.decisionName === decisionNames[i])) {return false}
    }
    return true;
  }

}
