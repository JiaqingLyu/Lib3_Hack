import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import { HttpClient } from '@angular/common/http';
const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  //定义点开
  currentArticle: any;
  //定义http service
  constructor(private http: HttpClient) {}
  //获取json数据
  getData(url){
    return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`);
  }
}
