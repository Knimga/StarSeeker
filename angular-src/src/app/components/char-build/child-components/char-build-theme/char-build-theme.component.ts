import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-char-build-theme',
  templateUrl: './char-build-theme.component.html',
  styleUrls: ['../../char-build-common.css']
})
export class CharBuildThemeComponent implements OnInit {
  themes: Object;
  viewedTheme: any;
  viewedThemeDecisions: any[];
  selectedTheme: any = {};
  showDecisions: Boolean;
  decisionsMade: {name: String, context: String, effect: any}[] = [];
  showDesc: any = {};

  @Output() themeComplete: EventEmitter<Boolean> = new EventEmitter();
  @Output() themeUpdate: EventEmitter<any> = new EventEmitter();

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.showDecisions = false;
    this.dataService.getThemeDesc().subscribe(themeDesc => {
      this.themes = themeDesc;
    }, err => {console.log(err);return false;});
  }

  viewTheme(theme) {
    this.viewedTheme = theme;
    this.showDesc = {};

    if(this.viewedTheme.decisions) {
      this.viewedThemeDecisions = this.viewedTheme.decisions.filter(d => d.context == 'theme')
    } else {this.viewedThemeDecisions = null}

    const length = this.viewedTheme.themeAbilities.length;
    for (let i=0;i<length;i++) {this.showDesc[i] = false}
  }

  selectTheme(theme) {
    this.selectedTheme = theme;
    if (!this.viewedThemeDecisions) {
      this.showDecisions = false; 
      this.decisionsMade = null;
      this.themeUpdate.emit({theme: this.selectedTheme, decisionsMade: null, decisionsRemaining: null});
      this.themeComplete.emit(true);
    } else {
      this.themeUpdate.emit({theme: this.selectedTheme, decisionsMade: null, decisionsRemaining: null});
      this.themeComplete.emit(false);
      this.showDecisions = true;
      this.decisionsMade = [];
    }
  }

  hideShow(i) {this.showDesc[i] = !this.showDesc[i]}

  makeDecision(decisionName,selectElement) {
    const thisDecision = this.viewedThemeDecisions.find((d) => d.name == decisionName);

    const decisionObject = {
      name: thisDecision.name, 
      context: thisDecision.context,
      effect: thisDecision.selectOptions[selectElement.selectedIndex - 1].effect
    }

    if(this.decisionsMade.find(d => d.name === decisionName)) {
      this.decisionsMade = this.decisionsMade.filter(d => d.name != decisionName);
    }

    this.decisionsMade.push(decisionObject);
    
    if(this.decisionsComplete()) {
      this.themeUpdate.emit({
        theme: this.selectedTheme,
        decisionsMade: this.decisionsMade,
        decisionsRemaining: this.selectedTheme.decisions.filter(d => d.context != 'theme')
      });
      this.themeComplete.emit(true);
    }
  }

  decisionsComplete() {
    const decisionNames = this.viewedThemeDecisions.map(d => d.name);
    for (let i=0;i<decisionNames.length;i++) {
      if(!this.decisionsMade.find(d => d.name === decisionNames[i])) {return false}
    }
    return true;
  }

}
