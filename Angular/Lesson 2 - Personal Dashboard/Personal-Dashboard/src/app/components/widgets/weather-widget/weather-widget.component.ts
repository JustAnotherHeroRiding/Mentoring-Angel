import { Component, OnInit } from '@angular/core';
import { WeatherData, WeatherService } from 'src/app/services/weather.service';
@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnInit {
  weatherData: WeatherData[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getWeather().subscribe({
      next: (data) => (this.weatherData = data),
      error: (err) => console.error(err),
    });
  }
}
