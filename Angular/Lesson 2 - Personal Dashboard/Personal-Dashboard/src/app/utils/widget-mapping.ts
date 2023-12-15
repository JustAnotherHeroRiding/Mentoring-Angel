import { Type } from '@angular/core';
import { WeatherWidgetComponent } from '../components/widgets/weather-widget/weather-widget.component';
import { ToDoListComponent } from '../components/widgets/to-do-list/to-do-list.component';
import { NewsFeedWidgetComponent } from '../components/widgets/news-feed-widget/news-feed-widget.component';
import { StocksComponent } from '../components/widgets/stocks/stocks.component';

export const widgetMapping: { [key: string]: Type<any> } = {
  weather: WeatherWidgetComponent,
  todo: ToDoListComponent,
  news: NewsFeedWidgetComponent,
  stocks: StocksComponent
};
