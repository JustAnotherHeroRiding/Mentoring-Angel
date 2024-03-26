import { Component } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { TOAST_CONFIG_TOKEN } from 'src/app/toast-config/toast-config';

@Component({
  selector: 'app-center-toast',
  templateUrl: './center-toast.component.html',
  styleUrls: ['./center-toast.component.scss'],
  providers: [
    {
      provide: TOAST_CONFIG_TOKEN,
      useValue: { horizontalPosition: 'center', verticalPosition: 'bottom' },
    },
    NotificationService,
  ],
})
export class CenterToastComponent {}
