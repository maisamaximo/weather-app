import { WeatherResponse } from './../models/weather.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ForecastResponse } from '../models/forecast.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  cities: string[] = ['london', 'madrid', 'amsterdam', 'paris', 'lisbon'];

  baseUrl = 'https://api.openweathermap.org/data/2.5/';
  apiKey = '200eb36186e425fee079a6963f502a6c';

  constructor(private httpClient: HttpClient) {}

  buildWeatherUrl(cityName: string) {
    return `${this.baseUrl}weather?q=${cityName}&appid=${this.apiKey}`;
  }

  buildForecastUrl(cityName: string) {
    return `${this.baseUrl}forecast?q=${cityName}&appid=${this.apiKey}`;
  }

  getWeatherData(cityName: string): Observable<WeatherResponse> {
    return this.httpClient.get<WeatherResponse>(this.buildWeatherUrl(cityName));
  }

  getForecastData(cityName: string): Observable<ForecastResponse> {
    return this.httpClient.get<ForecastResponse>(this.buildForecastUrl(cityName))
  }
}
