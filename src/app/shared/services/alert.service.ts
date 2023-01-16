import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  public successfulMessage(message: string):void {
    let horizontalPosition: MatSnackBarHorizontalPosition = 'end';
    let verticalPosition: MatSnackBarVerticalPosition = 'top';
    this._snackBar.open(message, 'Splash', {
      horizontalPosition: horizontalPosition,
      verticalPosition: verticalPosition,
      duration: 3000,
      panelClass: ['bg-white']
    });
  }
  
  public warningMessage(message: string):void{
    let horizontalPosition: MatSnackBarHorizontalPosition = 'end';
    let verticalPosition: MatSnackBarVerticalPosition = 'bottom';
    this._snackBar.open('Please enter a task.', 'Splash', {
      horizontalPosition: horizontalPosition,
      verticalPosition: verticalPosition,
    });
  }

}
