import { Component, inject } from '@angular/core';
import { NotificationService } from 'src/app/Services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
  notificationService = inject(NotificationService);
  constructor() {}
}
