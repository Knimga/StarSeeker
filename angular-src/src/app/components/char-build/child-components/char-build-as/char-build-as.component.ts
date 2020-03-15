import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-char-build-as',
  templateUrl: './char-build-as.component.html',
  styleUrls: ['./char-build-as.component.css','../../char-build-common.css']
})
export class CharBuildASComponent implements OnInit {
  pbCount: number = 0;
  ASIncTracker: Array<any> = [
    {level: 5, inc: [0,0,0,0,0,0]},
    {level: 10, inc: [0,0,0,0,0,0]},
    {level: 15, inc: [0,0,0,0,0,0]},
    {level: 20, inc: [0,0,0,0,0,0]}
  ];
  
  @Input() AS: {
    totals: Array<number>,
    race: Array<number>,
    theme: Array<number>,
    pb: Array<number>,
    levelInc: Array<number>
  }

  @Input() charLevel: number;

  @Output() ASUpdate: EventEmitter<Object> = new EventEmitter();
  @Output() ASComplete: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  pbInc(value,pbIndex) {
    if(this.validatePb(value,pbIndex)) {
      this.AS.pb[pbIndex] += value;
      this.pbCount += value;
      this.ASUpdate.emit(this.AS);
      this.ASComplete.emit(this.isASComplete());
    }
  }

  validatePb(value,pbIndex) {
    let tests = [
      this.AS.pb[pbIndex] + value >= 0,
      this.pbCount + value <= 10,
      this.pbCount + value >= 0,
    ];
    if(value > 0) {tests.push(this.pb18orBelow(value,pbIndex))}
    for (let i=0;i<tests.length;i++) {if(!tests[i]) return false} return true;
  }

  pb18orBelow(value,pbIndex) {
    let AS = this.sumArrays([[10,10,10,10,10,10],this.AS.race,this.AS.theme,this.AS.pb]);
    AS[pbIndex] += value;
    for (let i=0;i<6;i++) {if(AS[i] > 18) return false} return true;
  }

  getIncArray(levelOfInc) {return this.ASIncTracker.find(as => as.level == levelOfInc).inc}

  incValue(levelOfInc,ASIndex) {return this.ASIncTracker.find(as => as.level == levelOfInc).inc[ASIndex]}

  ASInc(eventTarget,levelOfInc,ASIndex) {
    let targetArray = this.getIncArray(levelOfInc);
    if(eventTarget.checked) {
      if(!this.isIncComplete(levelOfInc)) {targetArray[ASIndex] += (this.AS.totals[ASIndex] <= 16) ? 2 : 1}
        else {eventTarget.checked = false}
    } else {targetArray[ASIndex] = 0}
    this.levelIncUpdate();
  }

  isIncComplete(levelOfInc) {
    let targetArray = this.getIncArray(levelOfInc), counter = 0;
    for (let i=0;i<6;i++) {if(targetArray[i]) counter++}
    return (counter < 4) ? false : true;
  }

  isASComplete() {
    let ASIncComplete = true, levels = this.ASIncLevels();
    if(levels.length) {for (let i=0;i<levels.length;i++) {if(!this.isIncComplete(levels[i])) ASIncComplete = false}}
    return (this.pbCount == 10 && ASIncComplete) ? true : false;
  }

  levelIncUpdate() {
    let incLevels = this.ASIncLevels(), arrayBucket = [];
    for (let i=0;i<incLevels.length;i++) {arrayBucket.push(this.getIncArray(incLevels[i]))}
    this.AS.levelInc = this.sumArrays(arrayBucket);
    this.ASUpdate.emit(this.AS);
    this.ASComplete.emit(this.isASComplete());
  }

  sumArrays(arrayOfArrays) {
    let bucket = [0,0,0,0,0,0];
    for (let a=0;a<arrayOfArrays.length;a++) {for (let i=0;i<6;i++) {bucket[i] += arrayOfArrays[a][i]}}
    return bucket;
  }

  ASIncLevels() {
    let length = Math.floor(this.charLevel / 5), array = [];
    for (let i=0;i<length;i++) {array[i] = (i + 1) * 5}
    return array;
  }

  isLevelIncDisabled(levelOfInc) {
    if(levelOfInc != 5) {
      let levels = this.ASIncLevels(), stoppingPoint = levels.indexOf(levelOfInc);
      for (let i=0;i<stoppingPoint;i++) {if(!this.isIncComplete(levels[i])) return true}
    }
    return false;
  }

}
