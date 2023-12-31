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
import { StocksComponent } from './components/widgets/stocks/stocks.component';
import { StoreComponent } from './pages/store/store.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    StocksComponent,
    StoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DragDropModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 30000,
      positionClass: 'custom-toast-bottom-right',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
