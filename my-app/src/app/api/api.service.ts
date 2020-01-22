import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Source } from '../models/source';
import { Response } from '../models/response';
import { ArticleModel } from 'src/app/models/article';

import { map } from 'rxjs/operators';

const apiKey = '&apiKey=6b1899f90da8470b95bca82a0aa026e0';
const baseUrl = 'https://newsapi.org/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  getSources() {
    const url = baseUrl + 'v2/sources?country=gb' + apiKey;
    return this.http.get<Response<Source[]>>(url).pipe(map((obj => obj.sources)));
  }

  getArticles(id: string, page: number) {
    const url = baseUrl + `v2/top-headlines?sources=${id}&page=${page}&pageSize=5` + apiKey;
    return this.http.get<Response<ArticleModel[]>>(url).pipe(map(obj => obj.articles));
  }


}
