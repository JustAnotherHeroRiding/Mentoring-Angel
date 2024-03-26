import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { LeftToastModule } from './left-toast/left-toast.module';
import { RightToastModule } from './right-toast/right-toast.module';
import { CenterToastComponent } from './components/center-toast/center-toast.component';
import { SharedToasterModule } from './toast-config/shared-toaster/shared-toaster.module';

const modules = [
  CommonModule,
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  LeftToastModule,
  RightToastModule,
  SharedToasterModule,
];

const components = [AppComponent, CenterToastComponent];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  bootstrap: [AppComponent],
})
export class AppModule {}
