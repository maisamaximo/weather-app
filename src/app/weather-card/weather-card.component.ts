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

  WeatherData:any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherData();
    this.weatherService.getWeatherData(this.city).subscribe((weather: WeatherResponse) => {
      console.log("WEATHER DATA ->", weather);
    });
  }

  getWeatherData() {
    let data = this.getMockData();
    this.setWeatherData(data);
    console.log("DEBUG ->", this.weatherService.getUrl(this.city));
  }

  getMockData() {
    return JSON.parse(`{
      "coord": {
        "lon": -3.7026,
        "lat": 40.4165
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "base": "stations",
      "main": {
        "temp": 309.25,
        "feels_like": 307.31,
        "temp_min": 307.6,
        "temp_max": 310.91,
        "pressure": 1016,
        "humidity": 19
      },
      "visibility": 10000,
      "wind": {
        "speed": 5.81,
        "deg": 248,
        "gust": 7.6
      },
      "clouds": {
        "all": 0
      },
      "dt": 1625936132,
      "sys": {
        "type": 2,
        "id": 2007545,
        "country": "ES",
        "sunrise": 1625892814,
        "sunset": 1625946384
      },
      "timezone": 7200,
      "id": 3117735,
      "name": "Madrid",
      "cod": 200
    }`);
  }

  setWeatherData(data: any) {
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleDateString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }
}
