import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-char-build-theme',
  templateUrl: './char-build-theme.component.html',
  styleUrls: ['./char-build-theme.component.css','../../char-build-common.css']
})
export class CharBuildThemeComponent implements OnInit {
  themes: Object;
  viewedTheme: any;
  viewedThemeDecisions: any[];
  selectedTheme: any = {};
  showDecisions: Boolean;
  decisionsMade: {decisionName: String, selectedOption: Object}[] = [];
  showDesc: any = {};

  @Output() themeComplete: EventEmitter<any> = new EventEmitter();

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

    let length = this.viewedTheme.themeAbilities.length;
    for (let i=0;i<length;i++) {this.showDesc[i] = false}
  }

  selectTheme(theme) {
    this.selectedTheme = theme;
    if (!this.viewedThemeDecisions) {
      this.showDecisions = false; 
      this.decisionsMade = null;
      this.themeComplete.emit({theme: this.selectedTheme, decisionsMade: null, decisionsRemaining: null});
    } else {
      this.themeComplete.emit(false);
      this.showDecisions = true;
      this.decisionsMade = [];
    }
  }

  hideShow(i) {this.showDesc[i] = !this.showDesc[i]}

  makeDecision(decisionName,selectElement) {
    let decisionObject = this.viewedThemeDecisions.find((d) => d.name == decisionName);
    let selectedOption = decisionObject.selectOptions[selectElement.selectedIndex - 1];
    
    if(this.decisionsMade.find(d => d.decisionName === decisionName)) {
      let existingDecision = this.decisionsMade.find((d) => d.decisionName === decisionName);
      existingDecision.selectedOption = selectedOption;
    } else {
      this.decisionsMade.push({decisionName: decisionName, selectedOption: selectedOption});
    }
    
    if(this.decisionsComplete()) {
      this.themeComplete.emit({
        theme: this.selectedTheme,
        decisionsMade: this.decisionsMade,
        decisionsRemaining: this.selectedTheme.decisions.filter(d => d.context != 'theme')
      });
    }
  }

  decisionsComplete() {
    let decisionNames = this.viewedThemeDecisions.map(d => d.name);
    for (let i=0;i<decisionNames.length;i++) {
      if(!this.decisionsMade.find(d => d.decisionName === decisionNames[i])) {return false}
    }
    return true;
  }


}
