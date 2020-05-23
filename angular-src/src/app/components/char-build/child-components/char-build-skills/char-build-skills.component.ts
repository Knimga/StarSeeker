import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/common/src/facade/async';

@Component({ 
  selector: 'app-char-build-skills',
  templateUrl: './char-build-skills.component.html',
  styleUrls: ['./char-build-skills.component.css','../../char-build-common.css']
})
export class CharBuildSkillsComponent implements OnInit {
  @Input() skillsData: Array<any>;
  @Input() charLevel: number;
  @Input() charSkills: {
    classSkills: Array<number>,
    totals: Array<number>,
    mod: Array<number>,
    ranks: Array<number>,
    trained: Array<number>,
    bonuses: Array<number>
  }

  @Input() set skillRanks(skillRanks: number) {
    this._skillRanks = skillRanks;
    this.skillsComplete.emit(this.tabComplete());
  }
  get skillRanks(): number {return this._skillRanks}
  private _skillRanks: number;

  ranks: Array<number>;
  ranksSpent: number;

  @Output() skillsUpdate: EventEmitter<{ranks: Array<number>}> = new EventEmitter();
  @Output() skillsComplete: EventEmitter<boolean> = new EventEmitter();

  //constructor() { }

  ngOnInit() {
    this.ranksSpent = 0;
    this.ranks = Array(20).fill(0);
  }

  rankInc(value,rankIndex) {
    if(this.canInc(value,rankIndex)) {
      this.ranks[rankIndex] += value;
      this.ranksSpent += value;
    }
    this.skillsUpdate.emit({ranks: this.ranks});
    this.skillsComplete.emit(this.tabComplete());
  }

  canInc(value,rankIndex) {
    const newRanksSpent = this.ranksSpent + value;
    const newRankValue = this.ranks[rankIndex] + value;
    let tests = [newRankValue <= this.charLevel,newRankValue >= 0];
    if(value == 1) tests.push(newRanksSpent <= this.skillRanks);
    return !tests.some(t => !t);
  }

  resetRanks() {
    this.ranks.fill(0);
    this.ranksSpent = 0;
    this.skillsUpdate.emit({ranks: this.ranks});
    this.skillsComplete.emit(false);
  }

  tabComplete() {return this.ranksSpent == this.skillRanks}
  tooManyRanks() {return this.ranksSpent > this.skillRanks}
}
