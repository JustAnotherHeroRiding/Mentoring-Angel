import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/home/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { WeatherWidgetComponent } from './components/widgets/weather-widget/weather-widget.component';
import { NewsFeedWidgetComponent } from './components/widgets/news-feed-widget/news-feed-widget.component';
import { ToDoListComponent } from './components/widgets/to-do-list/to-do-list.component';
import { WidgetComponent } from './components/widgets/widget/widget.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    HomeComponent,
    WeatherWidgetComponent,
    NewsFeedWidgetComponent,
    ToDoListComponent,
    WidgetComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
