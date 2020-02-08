import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  subdecisions: {decisionName: String, selectedOption: Object}[] = [];

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
      this.showSubdecisions = true;
    }
  }

  makeSubdecision(decisionName,selectElement) {
    let decisionObject = this.selectedRace.subdecisions.find((d) => {return d.decisionName == decisionName});
    let selectedOption = decisionObject.selectOptions[selectElement.selectedIndex - 1];
    
    if(this.subdecisions.find(d => d.decisionName === decisionName)) {
      let existingDecision = this.subdecisions.find(d => d.decisionName === decisionName);
      existingDecision.selectedOption = selectedOption;
    } else {
      this.subdecisions.push({decisionName: decisionName, selectedOption: selectedOption});
    }
    
    if(this.subdecisionsComplete()) {
      this.raceComplete.emit({race: this.selectedRace, subdecisions: this.subdecisions});
    }
  }

  subdecisionsComplete() {
    let decisionNames = this.selectedRace.subdecisions.map(d => d.decisionName);
    for (let i=0;i<decisionNames.length;i++) {
      if(!this.subdecisions.find(d => d.decisionName === decisionNames[i])) {return false}
    }
    return true;
  }

  

}
