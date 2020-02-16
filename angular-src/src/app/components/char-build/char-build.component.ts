import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-char-build',
  templateUrl: './char-build.component.html',
  styleUrls: ['./char-build.component.css']
})
export class CharBuildComponent implements OnInit {
  charName: String;
  charLevel: Number;
  race: any = {};
  theme: any = {};
  class: any = {};
  skillsData = Array;

  isLocked: {
    raceThemeClass: Boolean;
    AS: Boolean;
    classChoices: Boolean;
    skills: Boolean;
    feats: Boolean;
    spells: Boolean;
  }
  isShown: {
    start: Boolean;
    race: Boolean;
    theme: Boolean;
    class: Boolean;
    AS: Boolean;
    classChoices: Boolean;
    skills: Boolean;
    feats: Boolean;
    spells: Boolean;
  }
  isComplete: {
    start: Boolean;
    race: Boolean;
    theme: Boolean;
    class: Boolean;
    AS: Boolean;
    classChoices: Boolean;
    skills: Boolean;
    feats: Boolean;
    spells: Boolean;
  }

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.isLocked = {
      raceThemeClass: true,
      AS: true,
      classChoices: true,
      skills: true,
      feats: true,
      spells: true
    }

    this.isShown = {
      start: true,
      race: false,
      theme: false,
      class: false,
      AS: false,
      classChoices: false,
      skills: false,
      feats: false,
      spells: false
    }

    this.isComplete = {
      start: false,
      race: false,
      theme: false,
      class: false,
      AS: false,
      classChoices: false,
      skills: false,
      feats: false,
      spells: false
    }

    this.dataService.getSkills().subscribe(skills => {
      this.skillsData = skills;
    }, err => {console.log(err);return false;});
  }

  showTab(tabName) {
    for (let tab in this.isShown) {this.isShown[tab] = false}
    this.isShown[tabName] = true;
  }

  startGo(nameLevel: {charName: String, startingLevel: Number}) {
    this.charName = nameLevel.charName;
    this.charLevel = nameLevel.startingLevel;
    this.isComplete.start = true;
    this.isLocked.raceThemeClass = false;
    this.showTab('race');
  }

  startUpdate(nameLevel: {charName: String, startingLevel: Number}) {
    this.charName = nameLevel.charName;
    this.charLevel = nameLevel.startingLevel;
  }

  raceComplete(raceObject) {
    if (raceObject) {
      this.race = {
        raceObject: raceObject.race, 
        decisionsMade: raceObject.decisionsMade,
        decisionsRemaining: raceObject.decisionsRemaining
      };
  
      console.log(this.race.raceObject.raceName+' race selected!');
      this.isComplete.race = true;
      if (this.race && this.theme && this.class) {this.isLocked.AS = false}
    } else {this.isComplete.race = false}
  }

  themeComplete(themeObject) {
    if(themeObject) {
      this.theme = themeObject; 
      console.log(this.theme.theme.themeName+' theme selected!');
      this.isComplete.theme = true;
      if (this.race && this.theme && this.class) {this.isLocked.AS = false}
    } else {this.isComplete.theme = false}
  }

  classComplete(classObject) {
    if(classObject) {
      this.class = classObject.class;
      if(this.class.length == 1) {
        console.log(this.class[0].className+' class selected!');
      } else {
        console.log('multiclassing: '+this.class.map(c => c.className).join(', '));
      }
      
      this.isComplete.class = true;
    } else {this.isComplete.class = false}
  }

}
