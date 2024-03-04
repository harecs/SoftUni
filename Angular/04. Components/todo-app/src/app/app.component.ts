import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',]
})
export class AppComponent {
  title: string = 'ToDo List';
  errorMessage: string = '';

  onErrorMessageFromChild(errorMessage: string) {
    this.errorMessage = errorMessage;
  }
}
