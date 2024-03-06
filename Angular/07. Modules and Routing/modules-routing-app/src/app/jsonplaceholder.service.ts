import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

import { Photo } from './types/photo';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {
  private apiUrl: string = environment.jsonPlaceholderUrl;

  constructor(private http: HttpClient) { }

  getPhotos(start: number = 0, limit?: number): Observable<Photo[]> {
    let url = `${this.apiUrl}/photos?_start=${start}`;

    if (limit) {
      url += `&_limit=${limit}`;
    }

    return this.http.get<Photo[]>(url);
  }
}
