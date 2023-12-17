import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private mockWeatherData: WeatherData[] = [
    {
      location: 'New York',
      temperature: 22,
      condition: 'Sunny',
      humidity: 50,
      windSpeed: 15,
    },
    {
      location: 'London',
      temperature: 17,
      condition: 'Cloudy',
      humidity: 75,
      windSpeed: 10,
    },
  ];

  constructor() {}

  getWeather(): Observable<WeatherData[]> {
    return of(this.mockWeatherData);
  }

  getWeatherByLocation(location: string): Observable<WeatherData | undefined> {
    const weather = this.mockWeatherData.find((w) => w.location === location);
    return of(weather);
  }
}
