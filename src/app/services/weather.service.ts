import { WeatherResponse } from './../models/weather.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ForecastResponse } from '../models/forecast.model';

/**
 * This service comunicates with external services.
 */
@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  baseUrl = 'https://api.openweathermap.org/data/2.5/';
  apiKey = '200eb36186e425fee079a6963f502a6c';

  constructor(private httpClient: HttpClient) {}

  /**
   * Build the URL for the weather request.
   *
   * @param cityName The city that will be concatenated in the URL.
   * @returns Final URL.
   */
  buildWeatherUrl(cityName: string) {
    return `${this.baseUrl}weather?q=${cityName}&appid=${this.apiKey}`;
  }

  /**
   * Build the URL for the forecast request.
   * 
   * @param cityName The city that will be concatenated in the URL.
   * @returns Final URL.
   */
  buildForecastUrl(cityName: string) {
    return `${this.baseUrl}forecast?q=${cityName}&appid=${this.apiKey}`;
  }

  /**
   * Communicate with external service go retrieve Weather data.
   *
   * @param cityName The city name to get the data for.
   * @returns Observable object containing an instance of {@link WeatherResponse}.
   */
  getWeatherData(cityName: string): Observable<WeatherResponse> {
    return this.httpClient.get<WeatherResponse>(this.buildWeatherUrl(cityName));
  }

  /**
   * Communicate with external service go retrieve Forecast data.
   *
   * @param cityName The city name to get the data for.
   * @returns Observable object containing an instance of {@link ForecastResponse}.
   */
  getForecastData(cityName: string): Observable<ForecastResponse> {
    return this.httpClient.get<ForecastResponse>(this.buildForecastUrl(cityName))
  }
}
