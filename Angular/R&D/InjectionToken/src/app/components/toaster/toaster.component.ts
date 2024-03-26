import { Component, Inject, Input } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss'],
})
export class ToasterComponent {
  @Input() position: string = 'center';

  constructor(private _notificationService: NotificationService) {}

  displayToast() {
    this._notificationService.openSnackBar();
  }
}
