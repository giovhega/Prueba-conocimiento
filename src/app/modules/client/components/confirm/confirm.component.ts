import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {

  public textConfirm: string;

  constructor(
    public dialogRef: MatDialogRef<Task>,
    @Inject(MAT_DIALOG_DATA) data: Task 
  ) {
    this.textConfirm = `Are you sure to delete this task ${data.name}?`;
  }

  public cancel() {
    this.dialogRef.close(false);
  }

  public confirm() {
    this.dialogRef.close(true);
  }

}
