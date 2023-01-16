import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent {

  public taskList: Task[] = [];

  constructor(
    public dialogRef: MatDialogRef<TrashComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task[]
  ) {
    this.taskList = [...data];
  }

  public cancel(): void {
    this.dialogRef.close();
  }

  public edit(): void {
    this.dialogRef.close(
      {
        temp2: this.taskList.filter(task => !task.enabled),
        temp1: this.taskList.filter(task => task.enabled && task.enabled === true).map(task => {
          task.enabled = false
          return task;
        }),
      }
    );
  }

  public changeInput(task: Task): void {
    task.enabled = true;
  }

}
