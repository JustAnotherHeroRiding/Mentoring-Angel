import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { API_NINJAS_KEY } from 'src/env';
import { HttpHeaders, HttpClient } from '@angular/common/http';

export interface WeatherData {
  wind_speed: number;
  wind_degrees: number;
  temp: number;
  humidity: number;
  sunset: number;
  min_temp: number;
  cloud_pct: number;
  feels_like: number;
  sunrise: number;
  max_temp: number;
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  endpoint = 'https://api.api-ninjas.com/v1/weather';
  API_KEY = API_NINJAS_KEY;

  constructor(private http: HttpClient) {}

  private createHeaders(): HttpHeaders {
    return new HttpHeaders({
      'X-Api-Key': this.API_KEY,
      'Content-Type': 'application/json',
    });
  }

  getWeather(location: string): Observable<any> {
    const headers = this.createHeaders();
    return this.http.get<any>(`${this.endpoint}?city=${location}`, { headers });
  }
}
