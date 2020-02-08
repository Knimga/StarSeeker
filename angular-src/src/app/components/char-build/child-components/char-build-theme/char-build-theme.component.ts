import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-char-build-theme',
  templateUrl: './char-build-theme.component.html',
  styleUrls: ['./char-build-theme.component.css']
})
export class CharBuildThemeComponent implements OnInit {
  themes: Object;
  viewedTheme: Object;
  selectedTheme: Object;
  @Output() themeComplete: EventEmitter<any> = new EventEmitter();

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getThemeDesc().subscribe(themeDesc => {
      this.themes = themeDesc;
    }, err => {console.log(err);return false;});
  }

  viewTheme(theme) {this.viewedTheme = theme}

  selectTheme(theme) {
    this.selectedTheme = theme;
    if (!(this.selectedTheme as any).subdecisions) {
      this.themeComplete.emit(this.selectedTheme);
    } else {console.log('Subdecisions required')}
  }

}
