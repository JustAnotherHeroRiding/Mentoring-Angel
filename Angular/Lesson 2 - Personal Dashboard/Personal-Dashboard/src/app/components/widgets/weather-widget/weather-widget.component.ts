import { Component, OnInit } from '@angular/core';
import { WeatherData, WeatherService } from 'src/app/services/weather.service';
interface WeatherWithCity extends WeatherData {
  location: string;
}
@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent {
  weatherData: WeatherWithCity[] = [];
  location = '';

  constructor(private weatherService: WeatherService) {}

  getWeather(location: string) {
    this.weatherService.getWeather(location).subscribe({
      next: (data) => {
        const extendedData = { ...data, location };
        console.log(extendedData);
        this.weatherData.unshift(extendedData);
      },
      error: (err) => console.error(err),
    });
  }
}
