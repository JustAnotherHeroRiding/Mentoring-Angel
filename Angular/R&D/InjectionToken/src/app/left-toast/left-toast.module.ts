import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TOAST_CONFIG_TOKEN,
  ToastHorizontalPosition,
} from '../toast-config/toast-config';

const TOAST_CONFIG: ToastHorizontalPosition = { position: 'left' };

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [{ provide: TOAST_CONFIG_TOKEN, useValue: TOAST_CONFIG }],
})
export class LeftToastModule {}
