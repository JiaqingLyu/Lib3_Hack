import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.apiURL;
const API_KEY = environment.apiKEY;

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  coursename: any;
  constructor(private http: HttpClient) { }
  //获取json数据
  getCourses(){
    return this.http.get('http://localhost:64000/',{responseType: 'text'});
  }
}
