import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

const imports = [MatInputModule, MatFormFieldModule, MatButtonModule];
@NgModule({
  imports: [...imports],
  exports: [...imports],
})
export class AppMaterialModule {}
