import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { Theme } from './types/theme';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>(`${environment.apiUrl}/themes`);
  }

  getLatestPosts(limit?: number): Observable<Post[]> {
    let url = `${environment.apiUrl}/posts`;
    
    if (limit) {
      url += `?limit=${limit}`;
    } 
    
    return this.http.get<Post[]>(url);
  }
}
