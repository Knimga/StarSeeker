import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-char-build',
  templateUrl: './char-build.component.html',
  styleUrls: ['./char-build.component.css']
})
export class CharBuildComponent implements OnInit {
  
  skillsData: Object;
  babSavesData: any;

  charObject: any = {
    charName: String,
    charLevel: Number,
    race: Object,
    theme: Object,
    classes: Array,
    AS: Array,
    keyAS: Number,
    HP: Number,
    stamina: Number,
    resolve: Number,
    ini: Number,
    saves: {fort: Number, ref: Number, will: Number},
    bab: {melee: Number, ranged: Number, thrown: Number}
  }

  decisionsMade: any[] = [];
  decisionsToMake: any[] = [];

  isShown: String = 'start';

  isLocked: {
    raceThemeClass: Boolean;
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

  constructor(private dataService:DataService) {}

  ngOnInit() {
    this.charObject = {
      charName: '',
      charLevel: 1,
      race: null,
      theme: null,
      classes: [],
      AS: [10,10,10,10,10,10],
      keyAS: null,
      HP: null,
      stamina: null,
      resolve: null,
      ini: null,
      saves: {fort: null, ref: null, will: null},
      bab: {melee: null, ranged: null, thrown: null}
    }

    this.isLocked = {
      raceThemeClass: true,
      AS: true,
      classChoices: true,
      skills: true,
      feats: true,
      spells: true
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

    this.dataService.getBabSaves().subscribe(babSaves => {
      this.babSavesData = babSaves[0];
    }, err => {console.log(err);return false;});

  }

  logCharObject() {console.log(this.charObject)} //debugging purposes

  showTab(tabName) {this.isShown = tabName}

  startGo(nameLevel: {charName: String, startingLevel: Number}) {
    this.charObject.charName = nameLevel.charName;
    this.charObject.charLevel = nameLevel.startingLevel;
    this.isLocked.raceThemeClass = false;
    this.showTab('race');
  }

  startUpdate(nameLevel: {charName: String, startingLevel: Number}) {
    this.charObject.charName = nameLevel.charName;
    this.charObject.charLevel = nameLevel.startingLevel;
    if(this.charObject.classes && this.charObject.classes.length == 1) {
      this.charObject.classes[0].classLevel = this.charObject.charLevel;
      this.statCalc();
    }
  }

  startComplete(boolean) {this.isComplete.start = boolean}
  raceComplete(boolean) {this.isComplete.race = boolean; this.tabLockCheck();}
  themeComplete(boolean) {this.isComplete.theme = boolean; this.tabLockCheck();}
  classComplete(boolean) {this.isComplete.class = boolean; this.tabLockCheck();}

  raceUpdate(raceInfo) {
    if (raceInfo) {
      this.charObject.race = raceInfo.race;
      this.updateDecisions('race',raceInfo.decisionsMade,raceInfo.decisionsToMake);
      this.statCalc();
    }
  }

  themeUpdate(themeInfo) {
    if(themeInfo) {
      this.charObject.theme = themeInfo.theme;
      this.updateDecisions('theme',themeInfo.decisionsMade,themeInfo.decisionsToMake);
      this.statCalc();
    }
  }

  classUpdate(classInfo) {
    if(classInfo) {
      this.charObject.classes = classInfo.class;
      this.updateDecisions('class',classInfo.decisionsMade,classInfo.decisionsToMake);
      this.statCalc();
    } else {this.isComplete.class = false}
  }

  tabLockCheck() {
    if (this.isComplete.race && this.isComplete.theme && this.isComplete.class) {this.isLocked.AS = false}
  }

  updateDecisions(context,decisionsMade,decisionsToMake) {
    this.decisionsMade = this.decisionsMade.filter(d => d.context != context);
    this.decisionsToMake = this.decisionsToMake.filter(d => d.context != context);
    if(decisionsMade) {this.decisionsMade = [...this.decisionsMade, ...decisionsMade]}
    if(decisionsToMake) {this.decisionsToMake = [...this.decisionsToMake, ...decisionsToMake]}
  }

  statCalc() {
    this.updateAS();
    this.processDecisions();
    this.updateKeyAS();
    this.updateStamHPResolve();
    this.updateBabSaves();
    this.updateIni();
  }

  processDecisions() {
    this.decisionsMade.forEach((d) => {
      switch (d.target) {
        case 'AS':
          for (let i=0;i<6;i++) {this.charObject.AS[i] += d.value[i]}
          break;
        case 'keyAS':
          let targetClass = this.charObject.classes.find(c => c.className == d.value.className);
          targetClass.classData.keyASIndex = d.value.keyASIndex;
          break;
        default: break;
      }
    })
  }

  updateKeyAS() {
    if(this.charObject.classes.length) {
      this.charObject.keyAS = Math.max(...this.charObject.classes.map(c => c.classData.keyASIndex));
    }
  }

  updateAS() {
    let newAS = [10,10,10,10,10,10];
    if(this.charObject.race) {for (let i=0;i<6;i++) {newAS[i] += this.charObject.race.raceData.AS[i]}}
    if(this.charObject.theme) {newAS[this.charObject.theme.themeData.ASBonusIndex]++}
    this.charObject.AS = newAS;
  }

  updateStamHPResolve() {
    if(this.charObject.race && this.charObject.classes) {
      let classHP = 0;
      this.charObject.classes.forEach(c => classHP += c.classData.HP * c.classLevel);
      this.charObject.HP = this.charObject.race.raceData.HP + classHP;
    }
    if(this.charObject.classes.length) {
      let stamina = 0;
      this.charObject.classes.forEach(c => stamina += (c.classData.stamina + this.ASMod(2)) * c.classLevel);
      this.charObject.stamina = stamina;
      let resolve = Math.floor(this.charObject.charLevel / 2) + this.ASMod(this.charObject.keyAS);
      this.charObject.resolve = (resolve < 1) ? 1 : resolve;
    }
  }

  updateBabSaves() {
    let bab = 0, fort = 0, ref = 0, will = 0;
    let allBabs = this.charObject.classes.map(c => this.babSavesData.bab[c.classData.bab][c.classLevel - 1]);
    let allForts = this.charObject.classes.map(c => this.babSavesData.saves[c.classData.saves.fort][c.classLevel - 1]);
    let allRefs = this.charObject.classes.map(c => this.babSavesData.saves[c.classData.saves.ref][c.classLevel - 1]);
    let allWills = this.charObject.classes.map(c => this.babSavesData.saves[c.classData.saves.will][c.classLevel - 1]);
    for (let i=0;i<this.charObject.classes.length;i++) {
      bab += allBabs[i];
      fort += allForts[i];
      ref += allRefs[i];
      will += allWills[i];
    }
    this.charObject.bab = {melee: bab + this.ASMod(0), ranged: bab + this.ASMod(1), thrown: bab + this.ASMod(0)}
    this.charObject.saves = {fort: fort, ref: ref, will: will}
  }

  updateIni() {this.charObject.ini = this.ASMod(1)}

  ASMod(ASIndex) {return Math.floor((this.charObject.AS[ASIndex] - 10) / 2)}

}
