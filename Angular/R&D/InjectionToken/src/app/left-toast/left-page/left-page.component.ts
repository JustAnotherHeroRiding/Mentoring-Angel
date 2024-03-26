import { Component } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { TOAST_CONFIG_TOKEN } from 'src/app/toast-config/toast-config';

@Component({
  selector: 'app-left-page',
  templateUrl: './left-page.component.html',
  styleUrls: ['./left-page.component.scss'],
  providers: [
    {
      provide: TOAST_CONFIG_TOKEN,
      useValue: { horizontalPosition: 'left', verticalPosition: 'bottom' },
    },
    NotificationService,
  ],
})
export class LeftPageComponent {}
