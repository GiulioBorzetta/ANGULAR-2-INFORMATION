import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './module/user/user.module';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private readonly apiUrl = 'https://hacker-news.firebaseio.com/v0/newstories.json';

  constructor(private http: HttpClient) { }

  getNewStories(): Observable<number[]> {
    return this.http.get<number[]>(this.apiUrl);
  }

  getItemById(id: number): Observable<User> {
    const itemUrl = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
    return this.http.get<User>(itemUrl);
  }
}
