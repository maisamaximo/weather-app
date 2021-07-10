import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'weather-app';

  cities: string[] = ['london', 'madrid', 'amsterdam', 'paris', 'lisbon'];

  constructor(private weatherService: WeatherService) {}
}
