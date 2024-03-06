import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../jsonplaceholder.service';
import { Observable } from 'rxjs';

import { Photo } from '../types/photo';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  photosSubscription: Observable<Photo[]> = this.JsonPlaceholderService.getPhotos(9, 8);
  photos1: Photo[] = [];
  photos2: Photo[] = [];

  isModalOpened: boolean = false;
  modalSrc: string = '';
  modalCaption: string = '';

  constructor(private JsonPlaceholderService: JsonPlaceholderService) { }

  ngOnInit(): void { 
      this.photosSubscription.subscribe((photos) => {
        this.photos1 = photos.slice(0, 4);
        this.photos2 = photos.slice(4, 8);        
      });
  }

  onPhotoClick(event: MouseEvent): void {
    const photoElement = event.target as HTMLImageElement;

    this.modalSrc = photoElement.src;
    this.modalCaption = photoElement.alt;

    this.isModalOpened = true;
  }

  onModalClick(): void {
    this.isModalOpened = false;
  }
}
