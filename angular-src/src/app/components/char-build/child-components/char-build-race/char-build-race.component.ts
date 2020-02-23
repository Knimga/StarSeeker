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
  decisionsMade: {name: String, context: String, target: String, value: any}[] = [];
  showDesc: any = {};

  @Output() raceComplete: EventEmitter<Boolean> = new EventEmitter();
  @Output() raceUpdate: EventEmitter<any> = new EventEmitter();

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

    for (let i=0;i<this.viewedRace.racialAbilities.length;i++) {this.showDesc[i] = false}
  }

  selectRace(race) {
    this.selectedRace = race;
    if (!this.viewedRaceDecisions) {
      this.showDecisions = false; 
      this.decisionsMade = null;
      this.raceUpdate.emit({race: this.selectedRace, decisionsMade: null, decisionsToMake: null});
      this.raceComplete.emit(true);
    } else {
      this.raceUpdate.emit({race: this.selectedRace, decisionsMade: null, decisionsToMake: null});
      this.raceComplete.emit(false);
      this.showDecisions = true;
      this.decisionsMade = [];
    }
  }

  hideShow(i) {this.showDesc[i] = !this.showDesc[i]}

  makeDecision(decisionName,selectElement) {
    let thisDecision = this.viewedRaceDecisions.find((d) => d.name == decisionName);
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

    if(this.decisionsComplete()) {
      this.raceUpdate.emit({
        race: this.selectedRace,
        decisionsMade: this.decisionsMade,
        decisionsToMake: this.selectedRace.decisions.filter(d => d.context != 'race')
      });
      this.raceComplete.emit(true);
    }
  }

  decisionsComplete() {
    let decisionNames = this.viewedRaceDecisions.map(d => d.name);
    for (let i=0;i<decisionNames.length;i++) {
      if(!this.decisionsMade.find(d => d.name === decisionNames[i])) {return false}
    }
    return true;
  }

}
