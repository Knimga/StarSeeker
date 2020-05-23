import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-char-build-race',
  templateUrl: './char-build-race.component.html',
  styleUrls: ['../../char-build-common.css']
})
export class CharBuildRaceComponent implements OnInit {
  races: Object;
  viewedRace: any;
  viewedRaceDecisions: any[];
  selectedRace: any = {};
  showDecisions: Boolean;
  decisionsMade: {name: String, context: String, effect: any, selectionCountIndex: number}[] = [];
  decisionsToMake: any[] = [];
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

  log() {console.log(this.decisionsMade)}

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
    if (!this.hasDecisions(race)) {
      this.showDecisions = false; 
      this.decisionsMade = null; this.decisionsToMake = null;
      this.raceUpdate.emit({race: this.selectedRace, decisionsMade: null, decisionsToMake: null, passiveEffects: this.getPassiveEffects(race)});
      this.raceComplete.emit(true);
    } else {
      this.raceUpdate.emit({race: this.selectedRace, decisionsMade: null, decisionsToMake: null, passiveEffects: this.getPassiveEffects(race)});
      this.raceComplete.emit(false);
      this.showDecisions = true;
      this.openDecisionCards();
      this.decisionsMade = [];
      this.decisionsToMake = this.getDecisionsToMake(race);
    }
  }

  hideShow(i) {
    if(this.showDecisions) {if(!this.abilityHasDecisions(i)) this.showDesc[i] = !this.showDesc[i]} 
      else {this.showDesc[i] = !this.showDesc[i]}
  }

  openDecisionCards() {
    if(this.selectedRace) {
      const abilities = this.selectedRace.racialAbilities;
      for (let i=0;i<abilities.length;i++) if(abilities[i].decision) this.showDesc[i] = true;
    }
  }

  makeDecision(decision,selectElement,selectionCountIndex) {
    let decisionObject = {
      name: decision.name, 
      context: decision.context,
      effect: decision.selectOptions[selectElement.selectedIndex - 1].effect,
      selectionCountIndex: null
    }

    if(decision.selectionCount) {
      decisionObject.selectionCountIndex = selectionCountIndex;
      let matchingDecision = this.decisionsMade.find(d => d.name == decision.name && d.selectionCountIndex == selectionCountIndex);
      if(matchingDecision) this.decisionsMade = this.decisionsMade.filter(d => d != matchingDecision);
    } else if(this.decisionsMade.find(d => d.name == decision.name)) {
      this.decisionsMade = this.decisionsMade.filter(d => d.name != decision.name)
    }

    this.decisionsMade.push(decisionObject);
    
    if(this.decisionsComplete()) {
      this.raceUpdate.emit({
        race: this.selectedRace,
        decisionsMade: this.decisionsMade,
        decisionsToMake: this.decisionsToMake,
        passiveEffects: this.getPassiveEffects(this.selectedRace)
      });
      this.raceComplete.emit(true);
    }
  }

  hasDecisions(race) {
    let hasRaceDecisions = false, hasAbilityDecisions = false;
    if(race.decisions) hasRaceDecisions = race.decisions.some(d => d.context == 'race');
    for (let i=0;i<race.racialAbilities.length;i++) if(race.racialAbilities[i].decision) {
      if(race.racialAbilities[i].decision.context == 'race') hasAbilityDecisions = true;
    }
    return (hasRaceDecisions || hasAbilityDecisions);
  }

  decisionsComplete() {
    const decisionNames = this.getDecisions(this.selectedRace).map(d => d.name);
    for (let i=0;i<decisionNames.length;i++) {if(!this.decisionsMade.find(d => d.name === decisionNames[i])) return false} 
    return true;
  }

  getDecisionsToMake(race) {
    let decisionsToMake = [];
    if(race.decisions) {
      for (let i=0;i<race.decisions.length;i++) if(race.decisions[i].context != 'race') decisionsToMake.push(race.decisions[i])
    }
    for (let a=0;a<race.racialAbilities.length;a++) if(race.racialAbilities[a].decision) {
      if(race.racialAbilities[a].decision.context != 'race') decisionsToMake.push(race.racialAbilities[a].decision)
    }
    return decisionsToMake;
  }

  getDecisions(race) {
    let raceDecisions = [], racialAbilityDecisions = [];
    if(race.decisions) raceDecisions = race.decisions.filter(d => d.context == 'race');
    for (let i=0;i<race.racialAbilities.length;i++) {
      if(race.racialAbilities.decision) racialAbilityDecisions.push(race.racialAbilities.decision);
    }
    return [...raceDecisions, ...racialAbilityDecisions];
  }

  getPassiveEffects(race) {
    let effects = []; const abilities = race.racialAbilities;
    for (let i=0;i<abilities.length;i++) if(abilities[i].effects) effects = [...effects, ...abilities[i].effects];
    return effects;
  }

  makeArray(number) {return Array(number).fill(0)}

  abilityHasDecisions(i) {return (this.selectedRace.racialAbilities[i].decision) ? true : false}

}