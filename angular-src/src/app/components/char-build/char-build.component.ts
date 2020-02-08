import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-char-build',
  templateUrl: './char-build.component.html',
  styleUrls: ['./char-build.component.css']
})
export class CharBuildComponent implements OnInit {
  charName: String;
  level: Number;
  race: any = {};
  theme: any = {};
  class: Object;

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

  constructor() { }

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
  }

  showTab(tabName) {
    for (let tab in this.isShown) {this.isShown[tab] = false}
    this.isShown[tabName] = true;
  }

  startComplete(nameLevel: {charName: String, startingLevel: Number}) {
    this.charName = nameLevel.charName;
    this.level = nameLevel.startingLevel;
    this.isLocked.raceThemeClass = false;
    this.showTab('race');
  }

  raceComplete(raceObject) {
    this.race = {raceObject: raceObject.race, subdecisions: raceObject.subdecisions}; 
    console.log(this.race.raceObject.raceName+' race selected!');
    if (this.race && this.theme && this.class) {this.isLocked.AS = false}
  }

  themeComplete(themeObject) {
    this.theme = themeObject; console.log(this.theme.themeName+' theme selected!');
    if (this.race && this.theme && this.class) {this.isLocked.AS = false}
  }

}
