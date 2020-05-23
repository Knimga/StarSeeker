import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  url: String = (window.location.origin == 'http://localhost:4200') ? 'http://localhost:3000': window.location.origin;

  constructor(private http:Http) { } 

  getGameData(routeString) {
    let url = this.url+'/gamedata/'+routeString;
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get(url, {headers: headers}).map(res => res.json());
  }

  getRaceDesc() {return this.getGameData('raceDesc')}
  getThemeDesc() {return this.getGameData('themeDesc')}
  getSkills() {return this.getGameData('skills')}
  getBabSaves() {return this.getGameData('babSaves')}
  getProficiencies() {return this.getGameData('proficiencies')}
  getClasses() {return this.getGameData('classes')}
  getClassFeatures() {return this.getGameData('classFeatures')}
  getClassAbilities() {return this.getGameData('classAbilities')}
}
