import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  url: String = (window.location.origin == 'http://localhost:4200') ? 'http://localhost:3000': window.location.origin;

  constructor(private http:Http) { } 

  getRaceDesc() {
    let raceDescUrl = this.url+'/gamedata/raceDesc';
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get(raceDescUrl, {headers: headers}).map(res => res.json());
  }

  getThemeDesc() {
    let themeDescUrl = this.url+'/gamedata/themeDesc';
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get(themeDescUrl, {headers: headers}).map(res => res.json());
  }

}
