import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  isSidebarShowed: string = 'none';

  w3_open(): void {
    this.isSidebarShowed =
      this.isSidebarShowed == 'none' ?
        'block' :
        'none';
  }

  w3_close(): void {
    this.isSidebarShowed = 'none';
  }
}
