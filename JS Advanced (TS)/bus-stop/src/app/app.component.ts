import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { busStopID } from './types/busStopID';
import { environment } from 'src/environments/environment';
import { BusStop } from './types/busStop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  busName: string = '';
  busList: unknown[][] = [];

  constructor(private http: HttpClient) { }

  onCheck(event: MouseEvent) {
    const { apiUrl } = environment;
    const buttonElement = event.target as HTMLInputElement;
    const inputElement = buttonElement.previousElementSibling as HTMLInputElement;

    const busStopId: busStopID = Number(inputElement.value);

    this.http.get(`${apiUrl}/${busStopId}`)
      .subscribe((data) => {
        if (!data) {
          this.busName = 'Error';
          this.busList = [];
          return;
        }

        const busStop = data as BusStop;
        this.busName = busStop.name;
        this.busList = Object.entries(busStop.buses);
      });
  }
}
