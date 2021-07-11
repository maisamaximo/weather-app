import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  // List of cities which will be displayed
  cities: string[] = ['london', 'madrid', 'amsterdam', 'paris', 'lisbon', 'prague'];

  constructor() {}
}
