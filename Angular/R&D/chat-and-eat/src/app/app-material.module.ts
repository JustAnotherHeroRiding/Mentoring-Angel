import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';

const imports = [
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDialogModule,
  MatIconModule,
  MatSliderModule,
];
@NgModule({
  imports: [...imports],
  exports: [...imports],
})
export class AppMaterialModule {}
