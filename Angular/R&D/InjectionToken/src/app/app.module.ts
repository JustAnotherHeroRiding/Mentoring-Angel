import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const materialComponents = [
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatSnackBarModule,
];
const modules = [
  CommonModule,
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [...materialComponents, ...modules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
