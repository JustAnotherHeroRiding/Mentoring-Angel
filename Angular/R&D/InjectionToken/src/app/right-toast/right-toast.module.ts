import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TOAST_CONFIG_TOKEN, ToastConfig } from '../toast-config/toast-config';
import { RightPageComponent } from './right-page/right-page.component';
import { SharedToasterModule } from '../toast-config/shared-toaster/shared-toaster.module';
import { NotificationService } from '../services/notification.service';

const TOAST_CONFIG: ToastConfig = {
  horizontalPosition: 'right',
  verticalPosition: 'bottom',
};

const modules = [CommonModule, SharedToasterModule];
const components = [RightPageComponent];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components],
})
export class RightToastModule {}
