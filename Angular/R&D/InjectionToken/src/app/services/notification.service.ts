import { Inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TOAST_CONFIG_TOKEN, ToastConfig } from '../toast-config/toast-config';

@Injectable()
export class NotificationService {
  private id = Math.random();

  constructor(
    @Inject(TOAST_CONFIG_TOKEN) private config: ToastConfig,
    private _snackBar: MatSnackBar
  ) {}

  openSnackBar() {
    console.log(this.config, this.id);
    this._snackBar.open(
      `Toast ${this.config.horizontalPosition === 'center' ? 'in' : 'on'} the ${
        this.config.horizontalPosition
      }!`,
      'Close',
      {
        horizontalPosition: this.config.horizontalPosition,
        verticalPosition: this.config.verticalPosition,
      }
    );
  }
}
