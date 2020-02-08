import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http:Http) { } 

  getRaceDesc() {
    let url = 'http://localhost:3000/gamedata/raceDesc';
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get(url, {headers: headers}).map(res => res.json());
  }

  getThemeDesc() {
    let url = 'http://localhost:3000/gamedata/themeDesc';
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get(url, {headers: headers}).map(res => res.json());
  }

}
