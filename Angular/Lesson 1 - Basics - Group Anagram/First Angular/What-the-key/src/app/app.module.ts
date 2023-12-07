import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { ResultCardComponent } from './result-card/result-card.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { DeletedComponent } from './deleted/deleted.component'; // Import HttpClientModule


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ResultCardComponent,
    SearchResultComponent,
    LoadingSpinnerComponent,
    HomeComponent,
    LibraryComponent,
    DeletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
