import { ForecastResponse } from '../models/forecast.model';
import { Component, Input, OnInit } from '@angular/core';
import { WeatherResponse } from '../models/weather.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
  @Input()
  city: any;

  forecastEnabled: boolean = false;

  weatherData: any;
  forecastData: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherData();
  }

  async getWeatherData() {
    await this.weatherService.getWeatherData(this.city).subscribe((weather: WeatherResponse) => {
      console.log("WEATHER DATA ->", weather);
      this.weatherData = weather;
    });
  }

  convertToCelsius(temp: number) {
    let kevinDiff = 273.15;
    return (temp - kevinDiff).toFixed(0);
  }

  async showForecast() {
    if (!this.forecastData) await this.getForeCastData();
    this.forecastEnabled = !this.forecastEnabled;
  }

  async getForeCastData() {
    await this.weatherService.getForecastData(this.city).subscribe((forecast: ForecastResponse) => {
      console.log("FORECAST DATA ->", forecast);
      this.forecastData = forecast.list;
    });
  }
}
