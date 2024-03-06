import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  isSidebarShowed: boolean = false;

  w3_open(): void {
    this.isSidebarShowed = !this.isSidebarShowed;
  }

  w3_close(): void {
    this.isSidebarShowed = false;
  }
}
