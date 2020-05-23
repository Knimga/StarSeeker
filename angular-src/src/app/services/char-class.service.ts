import { Injectable } from '@angular/core';
import {DataService} from './data.service';

@Injectable()
export class CharClassService {
  classFeatures: Array<{
    _id: string,
    id: number,
    className: string,
    source: string,
    featureName: string,
    decisionRequired: number,
    level: number,
    levelsReceived: any,
    desc: string,
    decisionType: string,
    skillIds?: Array<number>,
    effects?: {target: string, skillIds: Array<number>, scaledValue?: Array<number>, value?: number}
  }>;

  constructor(private dataService: DataService) {
    this.dataService.getClassFeatures().subscribe(classFeatures => {
      this.classFeatures = classFeatures;
    }, err => {console.log(err);return false;});
  }

  allFeatures() {return this.classFeatures}

  oneClassFeatures(className) {return this.classFeatures.filter(f => f.className == className)}

  featuresByClassLevel(className,classLevel) {
    return this.classFeatures.filter(f => f.className == className && f.level <= classLevel)
  }

  featuresWithDecisions(className) {
    return this.classFeatures.filter(f => f.className == className && f.decisionRequired)
  }

  activeFeatures(classArray: Array<{className: string, classLevel: number}>) {
    let activeClassFeatures = [];
    classArray.forEach(c => 
      activeClassFeatures = [...activeClassFeatures, ...this.featuresByClassLevel(c.className,c.classLevel)]
    );
    return activeClassFeatures;
  }

  getPassiveEffects(activeFeatures: Array<any>, classes: Array<any>) {
    let effects = [];
    for (let f=0;f<activeFeatures.length;f++) {
      if(activeFeatures[f].effects) {
        if(typeof activeFeatures[f].effects == 'string') activeFeatures[f].effects = JSON.parse(activeFeatures[f].effects);
        activeFeatures[f].effects.forEach(e => {
          if(e.scaledValue) e.value = e.scaledValue[this.getClassLevel(activeFeatures[f].className,classes)-1]
        });
        effects = [...effects, ...activeFeatures[f].effects];
      }
    }
    return effects;
  }

  getClassLevel(className,classes) {return classes.find(c => c.className == className).classLevel || null}

}
