import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Photo } from '../types/photo';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private URL: string = `https://jsonplaceholder.typicode.com/photos`;
  photos: Photo[] | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(`${this.URL}?_start=0&_limit=4`)
      .subscribe(photos => {
        this.photos = photos as Photo[];
      })
  }
}
