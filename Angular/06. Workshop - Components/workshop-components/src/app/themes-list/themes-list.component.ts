import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/theme';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit {
  themes: Theme[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getThemes()
      .subscribe((themes) => {
        this.themes = themes.sort((a, b) => b.subscribers.length - a.subscribers.length);
        console.log(this.themes);
      });
  }
}
