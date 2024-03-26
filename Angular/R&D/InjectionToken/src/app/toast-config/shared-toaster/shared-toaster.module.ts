import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterComponent } from 'src/app/components/toaster/toaster.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

const materialComponents = [
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatSnackBarModule,
];

@NgModule({
  declarations: [ToasterComponent],
  imports: [CommonModule, ...materialComponents],
  exports: [ToasterComponent],
})
export class SharedToasterModule {}
