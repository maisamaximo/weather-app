import { WeatherResponse } from './../models/weather.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  // weatherData: any;
  cities: string[] = ['london', 'madrid', 'amsterdam', 'paris', 'lisbon'];

  baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = '200eb36186e425fee079a6963f502a6c';

  constructor(private httpClient: HttpClient) {}

  getUrl(city_name: string) {
    return `${this.baseUrl}?q=${city_name}&appid=${this.apiKey}`;
  }

  getWeatherData(city_name: string): Observable<WeatherResponse> {
    return this.httpClient.get<WeatherResponse>(this.getUrl(city_name));
  }
}
