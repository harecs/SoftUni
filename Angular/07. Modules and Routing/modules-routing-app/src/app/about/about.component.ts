import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Photo } from '../types/photo';
import { JsonPlaceholderService } from '../jsonplaceholder.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private JsonPlaceholderService: JsonPlaceholderService) { }

  ngOnInit(): void {
    this.JsonPlaceholderService.getPhotos(0, 4)
      .subscribe(photos => {
        this.photos = photos;
      })
  }
}
