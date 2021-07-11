export interface WeatherResponse {
  coord: Coord;
  weather: Weather;
  main: Main;
  wind: Wind;
  clouds: Clouds;
  sys: Sys;
}
interface Coord {
  lon: number;
  lat: number;
}
interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
interface Wind {
  speed: number;
  deg: number;
  gust: number;
}
interface Clouds {
  all: number;
}
interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
