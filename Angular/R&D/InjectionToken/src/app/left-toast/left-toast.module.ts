import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TOAST_CONFIG_TOKEN, ToastConfig } from '../toast-config/toast-config';
import { LeftPageComponent } from './left-page/left-page.component';
import { SharedToasterModule } from '../toast-config/shared-toaster/shared-toaster.module';
import { NotificationService } from '../services/notification.service';

const TOAST_CONFIG: ToastConfig = {
  horizontalPosition: 'left',
  verticalPosition: 'bottom',
};

const modules = [SharedToasterModule, CommonModule];
const components = [LeftPageComponent];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components],
})
export class LeftToastModule {}
