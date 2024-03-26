import { Component } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { TOAST_CONFIG_TOKEN } from 'src/app/toast-config/toast-config';

@Component({
  selector: 'app-right-page',
  templateUrl: './right-page.component.html',
  styleUrls: ['./right-page.component.scss'],
  providers: [
    {
      provide: TOAST_CONFIG_TOKEN,
      useValue: { horizontalPosition: 'right', verticalPosition: 'bottom' },
    },
    NotificationService,
  ],
})
export class RightPageComponent {}
