import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Notification {
  message: string;
  type: 'info' | 'error' | 'success';
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationSource = new BehaviorSubject<Notification | null>(null);
  notification$ = this.notificationSource.asObservable();

  constructor() {}

  showNotification(
    message: string,
    type: 'info' | 'error' | 'success' = 'info'
  ) {
    this.notificationSource.next({ message, type });
  }

  clearNotification() {
    this.notificationSource.next(null);
  }
}
