import { Component, OnInit } from '@angular/core';
import { WeatherData, WeatherService } from 'src/app/services/weather.service';
@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent {
  weatherData?: WeatherData;
  location = ''

  constructor(private weatherService: WeatherService) {}

  getWeather(location: string) {
    this.weatherService.getWeather(location).subscribe({
      next: (data) => (this.weatherData = data),
      error: (err) => console.error(err),
      complete: () => console.log(this.weatherData),
    });
  }
}
