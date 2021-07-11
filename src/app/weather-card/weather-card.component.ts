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

  /**
   * Calls the service to gather the weather data.
   * This method must be called in the component initialization since it will load core data for
   * this component.
   */
  async getWeatherData() {
    await this.weatherService.getWeatherData(this.city).subscribe((weather: WeatherResponse) => {
      this.weatherData = weather;
    });
  }

  /**
   * Converts Kelvin temperature to Celcius.
   *
   * @param temp Temperature in Kelvin.
   * @returns The temperature converted to Celcius.
   */
  convertToCelsius(temp: number) {
    let kelvinDiff = 273.15;
    return (temp - kelvinDiff).toFixed(0);
  }

  /**
   * Responsible for showing Forecast data. If the data is not downloded get it from the service.
   */
  async showForecast() {
    if (!this.forecastData) await this.getForeCastData();
    this.forecastEnabled = !this.forecastEnabled;
  }

  /**
   * Calls the service to gather the forecast data.
   */
  async getForeCastData() {
    await this.weatherService.getForecastData(this.city).subscribe((forecast: ForecastResponse) => {
      this.forecastData = forecast.list;
    });
  }


}
