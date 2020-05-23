import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {CharClassService} from '../../services/char-class.service';

@Component({
  selector: 'app-char-build',
  templateUrl: './char-build.component.html',
  styleUrls: ['./char-build.component.css']
})
export class CharBuildComponent implements OnInit {
  
  skillsData: Array<any>;
  babSavesData: any;
  proficiencies: Array<any>;
  classAbilities: Array<any>;

  charObject: any = {
    charName: String,
    charLevel: Number,
    race: Object,
    theme: Object,
    classes: Array,
    classChoices: Array,
    passiveEffects: Array,
    AS: {totals: Array, race: Array, theme: Array, pb: Array, levelInc: Array},
    keyAS: Number,
    HP: Number,
    stamina: Number,
    resolve: Number,
    ini: Number,
    saves: {fort: Number, ref: Number, will: Number},
    bab: {melee: Number, ranged: Number, thrown: Number},
    skillRanks: Number,
    skills: {classSkills: Array, totals: Array, mod: Array, ranks: Array, trained: Array, bonuses: Array}
  }

  decisionsMade: any[] = [];
  decisionsToMake: any[] = [];
  classSummary: Array<any> = [];
  themeSkillBonus: boolean;

  isShown: String = 'start';

  raceThemeClassASLocked: boolean;
 
  isComplete: {
    start: boolean;
    race: boolean;
    theme: boolean;
    class: boolean;
    AS: boolean;
    classChoices: boolean;
    skills: boolean;
    feats: boolean;
    spells: boolean;
  }

  constructor(private dataService: DataService, private charClassService: CharClassService) {}

  ngOnInit() {
    this.charObject = {
      charName: '',
      charLevel: 1,
      race: null,
      theme: null,
      classes: [],
      classChoices: [],
      passiveEffects: [],
      AS: {
        totals: [10,10,10,10,10,10],
        race: [0,0,0,0,0,0],
        theme: [0,0,0,0,0,0],
        pb: [0,0,0,0,0,0],
        levelInc: [0,0,0,0,0,0]
      },
      keyAS: null,
      HP: null,
      stamina: null,
      resolve: null,
      ini: null,
      saves: {fort: null, ref: null, will: null},
      bab: {melee: null, ranged: null, thrown: null},
      skillRanks: 0,
      skills: {
        classSkills: Array(20).fill(0),
        totals: Array(20).fill(0),
        mod: Array(20).fill(0),
        ranks: Array(20).fill(0),
        trained: Array(20).fill(0),
        bonuses: Array(20).fill(0)
      }
    }

    this.raceThemeClassASLocked = true;

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
      this.skillsData = skills.sort((a,b) => (a.skillId > b.skillId) ? 1 : -1);
    }, err => {console.log(err);return false;});

    this.dataService.getBabSaves().subscribe(babSaves => {
      this.babSavesData = babSaves[0];
    }, err => {console.log(err);return false;});

    this.dataService.getProficiencies().subscribe(proficiencies => {
      this.proficiencies = proficiencies;
    }, err => {console.log(err);return false;});

    this.dataService.getClassAbilities().subscribe(classAbilities => {
      this.classAbilities = classAbilities;
    }, err => {console.log(err);return false;});
  }

  sumOfClassLevels() {return this.charObject.classes.map(c => c.classLevel).reduce((a,b) => a + b)}

  log() {console.log(this.charObject.passiveEffects)} //dev purposes
  logCharObject() {console.log(this.charObject)}

  showTab(tabName) {this.isShown = tabName}

  startGo(nameLevel: {charName: string, startingLevel: number}) {
    this.charObject.charName = nameLevel.charName;
    this.charObject.charLevel = nameLevel.startingLevel;
    this.raceThemeClassASLocked = false;
    this.showTab('race');
  }

  startComplete(boolean) {this.isComplete.start = boolean}
  raceComplete(boolean) {this.isComplete.race = boolean}
  themeComplete(boolean) {this.isComplete.theme = boolean}
  classComplete(boolean) {this.isComplete.class = boolean}
  ASComplete(boolean) {this.isComplete.AS = boolean}
  classChoicesComplete(boolean) {this.isComplete.classChoices = boolean}
  skillsComplete(boolean) {this.isComplete.skills = boolean}

  startUpdate(nameLevel: {charName: string, startingLevel: number}) {
    if(this.charObject.classes.length && nameLevel.startingLevel != this.charObject.charLevel) {
      if(this.charObject.classes.length == 1) {
        this.charObject.classes[0].classLevel = nameLevel.startingLevel;
        const activeFeatures = this.charClassService.activeFeatures(this.charObject.classes);
        this.updatePassiveEffects('class',this.charClassService.getPassiveEffects(activeFeatures,this.charObject.classes));
        this.statCalc();
      } else if (nameLevel.startingLevel < this.sumOfClassLevels()) {
        if(this.charObject.classes[1].classLevel == 1) {this.charObject.classes.pop()}
          else {this.charObject.classes[1].classLevel--}
        const activeFeatures = this.charClassService.activeFeatures(this.charObject.classes);
        this.updatePassiveEffects('class',this.charClassService.getPassiveEffects(activeFeatures,this.charObject.classes));
        this.statCalc();
      }
      this.refreshClassSummary();
    }
    this.charObject.charName = nameLevel.charName;
    this.charObject.charLevel = nameLevel.startingLevel;
  }

  raceUpdate(raceInfo) {
    this.charObject.race = raceInfo.race;
    this.charObject.AS.race = this.charObject.race.raceData.AS;
    this.updateDecisions('race',raceInfo.decisionsMade,raceInfo.decisionsToMake);
    this.processDecisions();
    this.updatePassiveEffects('race',raceInfo.passiveEffects);
    this.statCalc();
  }

  themeUpdate(themeInfo) {
    this.charObject.theme = themeInfo.theme;
    this.charObject.AS.theme = this.charObject.theme.themeData.AS;
    this.updateDecisions('theme',themeInfo.decisionsMade,themeInfo.decisionsToMake);
    this.processDecisions();
    this.statCalc();
  }

  classUpdate(classInfo) {
    this.charObject.classes = classInfo.classes;
    this.updateDecisions('class',classInfo.decisionsMade,classInfo.decisionsToMake);
    this.updatePassiveEffects('class',classInfo.passiveEffects);
    this.processDecisions();
    this.statCalc();
    this.refreshClassSummary();
  }

  classChoicesUpdate(abilitiesArray) {this.charObject.classChoices = abilitiesArray}

  ASUpdate(newAS) {this.charObject.AS = newAS; this.statCalc()}

  skillsUpdate(skillUpdates: {ranks: Array<number>}) {
    this.charObject.skills.ranks = skillUpdates.ranks;
    this.updateSkillTraining();
    this.updateSkillTotals();
  }

  statCalc() {
    this.updateAS();
    this.updateKeyAS();
    this.updateStamHPResolve();
    this.updateBabSaves();
    this.updateIni();
    this.updateSkills();
    this.applyPassiveEffects();
    this.updateSkillTotals();
  }

  updateKeyAS() {
    if(this.charObject.classes.length) {
      const allKeyASIndices = this.charObject.classes.map(c => c.keyASIndex);
      const allKeyASScores = allKeyASIndices.map(i => this.charObject.AS.totals[i]);
      const indexOfHighest = allKeyASScores.indexOf(Math.max(...allKeyASScores));
      this.charObject.keyAS = allKeyASIndices[indexOfHighest];
    }
  }

  updateAS() {
    let newAS = [10,10,10,10,10,10]; const AS = this.charObject.AS;
    newAS = this.sumArrays([newAS,AS.race,AS.theme,AS.pb,AS.levelInc],6);
    this.charObject.AS.totals = newAS;
  }

  updateStamHPResolve() {
    if(this.charObject.race && this.charObject.classes) {
      let classHP = 0;
      this.charObject.classes.forEach(c => classHP += c.hp * c.classLevel);
      this.charObject.HP = this.charObject.race.raceData.HP + classHP;
    }
    if(this.charObject.classes.length) {
      let stamina = 0;
      this.charObject.classes.forEach(c => stamina += (c.stamina + this.ASMod(2)) * c.classLevel);
      this.charObject.stamina = stamina;
      const resolve = Math.floor(this.charObject.charLevel / 2) + this.ASMod(this.charObject.keyAS);
      this.charObject.resolve = (resolve < 1) ? 1 : resolve;
    }
  }

  updateBabSaves() {
    let bab = 0, fort = 0, ref = 0, will = 0; const classes = this.charObject.classes;
    const allBabs = classes.map(c => this.babSavesData.bab[c.bab][c.classLevel - 1]);
    const allForts = classes.map(c => this.babSavesData.saves[c.fort][c.classLevel - 1]);
    const allRefs = classes.map(c => this.babSavesData.saves[c.ref][c.classLevel - 1]);
    const allWills = classes.map(c => this.babSavesData.saves[c.will][c.classLevel - 1]);
    for (let i=0;i<classes.length;i++) {bab += allBabs[i]; fort += allForts[i]; ref += allRefs[i]; will += allWills[i];} 
    this.charObject.bab = {melee: bab + this.ASMod(0), ranged: bab + this.ASMod(1), thrown: bab + this.ASMod(0)}
    this.charObject.saves = {fort: fort + this.ASMod(2), ref: ref + this.ASMod(1), will: will  + this.ASMod(4)}
  }

  updateIni() {this.charObject.ini = this.ASMod(1)}

  updateSkills() {
    this.updateClassSkills();
    this.charObject.skills.mod = this.skillsData.map(s => this.ASMod(s.ASIndex) || 0);
    this.charObject.skillRanks = this.skillRanks();
    this.updateSkillTraining();
    this.updateSkillBonuses();
  }

  updateClassSkills() {
    let classSkills = Array(this.skillsData.length).fill(0);
    for (let c=0;c<this.charObject.classes.length;c++) {
      for (let s=0;s<classSkills.length;s++) {
        if (this.charObject.classes[c].classSkills.includes(this.skillsData[s].skillId)) classSkills[s] = 1;
      }
    }
    if(this.charObject.theme) {
      let themeSkillId = this.charObject.theme.themeData.themeSkillId;
      if(themeSkillId) {
        let index = this.getSkillIndex(themeSkillId);
        if(classSkills[index] == 1) {this.themeSkillBonus = true} else {classSkills[index] = 1; this.themeSkillBonus = false}
      }
    }
    this.charObject.skills.classSkills = classSkills;
  }

  updateSkillTraining() {
    let trained = Array(20).fill(0);
    for (let i=0;i<this.skillsData.length;i++) {
      if(this.charObject.skills.classSkills[i] && this.charObject.skills.ranks[i]) trained[i] = 3;
    }
    this.charObject.skills.trained = trained;
  }

  updateSkillBonuses() {
    let bonuses = Array(20).fill(0);
    const skillDecisionsMade = this.decisionsMade.filter(d => d.effect.target == 'skills');
    skillDecisionsMade.forEach(d => bonuses[this.getSkillIndex(d.effect.skillId)] += d.effect.value);
    if(this.themeSkillBonus) bonuses[this.getSkillIndex(this.charObject.theme.themeData.themeSkillId)] += 1;
    this.charObject.skills.bonuses = bonuses;
  }

  skillRanks() {
    let bucket = 0; const classes = this.charObject.classes;
    for (let i=0;i<classes.length;i++) 
      bucket += ((classes[i].skillRanksPerLvl + this.ASMod(3)) * classes[i].classLevel);
    return bucket;
  }

  updateSkillTotals() {
    const skills = this.charObject.skills;
    const totals = this.sumArrays([skills.mod,skills.ranks,skills.trained,skills.bonuses],20);
    this.charObject.skills.totals = totals;
  }

  updateDecisions(context,decisionsMade,decisionsToMake) {
    this.decisionsMade = this.decisionsMade.filter(d => d.context != context);
    this.decisionsToMake = this.decisionsToMake.filter(d => d.context != context);
    if(decisionsMade) this.decisionsMade = [...this.decisionsMade, ...decisionsMade];
    if(decisionsToMake) this.decisionsToMake = [...this.decisionsToMake, ...decisionsToMake];
  }

  updatePassiveEffects(context,effects) {
    if(effects.length) {
      this.charObject.passiveEffects = this.charObject.passiveEffects.filter(e => e.context != context);
      effects.forEach(e => {e.context = context});
      this.charObject.passiveEffects = [...this.charObject.passiveEffects, ...effects];
    }
  }

  processDecisions() {
    this.decisionsMade.forEach((d) => {
      switch (d.effect.target) {
        case 'AS':
          if(d.context == 'race') this.charObject.AS.race = this.sumArrays([this.charObject.race.raceData.AS,d.effect.value],6);
          break;
        case 'keyAS': this.charObject.classes.find(c => c.className == d.effect.value.className).keyASIndex = d.effect.value.keyASIndex;
          break;
        case 'themeSkillId': this.charObject.theme.themeData.themeSkillId = d.effect.value;
          break;
        default: break;
      }
    })
  }

  applyPassiveEffects() {
    this.charObject.passiveEffects.forEach(e => {
      switch (e.target) {
        case 'skills': 
          e.skillIds.forEach(id => this.charObject.skills.bonuses[this.getSkillIndex(id)] += e.value);
          break;
        case 'skillRanks': this.charObject.skillRanks += (e.value * this.charObject.charLevel);
          break;
        default: break;
      }
    })
  }

  sumArrays(arrayOfArrays,returnedLength) {
    const len = returnedLength; let bucket = Array(len).fill(0);
    for (let a=0;a<arrayOfArrays.length;a++) {for (let i=0;i<len;i++) bucket[i] += arrayOfArrays[a][i]}
    return bucket;
  }

  refreshClassSummary() {
    let classSummary = []; const classes = this.charObject.classes;
    if(classes.length) {
      for (let c=0;c<classes.length;c++) 
        classSummary.push({className: classes[c].className, classLevel: classes[c].classLevel})
    }
    this.classSummary = classSummary;
  }

  ASMod(ASIndex) {return Math.floor((this.charObject.AS.totals[ASIndex] - 10) / 2)}

  getSkillIndex(skillId) {return this.skillsData.indexOf(this.skillsData.find(s => s.skillId == skillId))}
}