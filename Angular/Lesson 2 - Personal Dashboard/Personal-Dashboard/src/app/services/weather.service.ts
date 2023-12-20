import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { API_NINJAS_KEY } from 'src/env';
import { HttpHeaders, HttpClient } from '@angular/common/http';

/* API DOCS https://api-ninjas.com/api/weather */

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
  private readonly endpoint = 'https://api.api-ninjas.com/v1/weather';
  private readonly API_KEY = API_NINJAS_KEY;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = this.createHeaders();
  }

  private createHeaders(): HttpHeaders {
    return new HttpHeaders({
      'X-Api-Key': this.API_KEY,
      'Content-Type': 'application/json',
    });
  }

  getWeather(location: string): Observable<any> {
    const headers = this.headers;
    return this.http.get<any>(`${this.endpoint}?city=${location}`, { headers });
  }
}
