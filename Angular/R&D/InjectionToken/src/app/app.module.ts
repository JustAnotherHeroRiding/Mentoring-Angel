import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { LeftToastModule } from './left-toast/left-toast.module';
import { RightToastModule } from './right-toast/right-toast.module';

const modules = [
  CommonModule,
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  LeftToastModule,
  RightToastModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [...modules],
  bootstrap: [AppComponent],
})
export class AppModule {}
