import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(
    horizontalPos: MatSnackBarHorizontalPosition = 'center',
    verticalPos: MatSnackBarVerticalPosition = 'bottom'
  ) {
    this._snackBar.open('Cannonball!!', 'Splash', {
      horizontalPosition: horizontalPos,
      verticalPosition: verticalPos,
    });
  }
}
