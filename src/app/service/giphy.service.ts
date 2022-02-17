import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  private apiKey = environment.apiKey;
  private query: string;

  constructor(private http: HttpClient) { }

  getGifs() {
    return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${this.query}&limit=50&offset=0&rating=G&lang=en`);
  }

  trendingGifs() {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${this.apiKey}&limit=50&rating=G`);
  }



  searchGifs(query: string) {
    this.query = query;
  }
}
