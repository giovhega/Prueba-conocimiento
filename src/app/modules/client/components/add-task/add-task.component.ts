import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  @Output() eventTask: EventEmitter<Task> = new EventEmitter();
  public inputTask: FormControl = new FormControl('');

  constructor(
    private alertService: AlertService
  ){}

  public addTask() {

    if (!this.inputTask.value) {
      this.invalidMessage();
      return;
    }

    const task: Task = {
      name: this.inputTask.value,
      status: 'Pending',
      enabled: true
    };
    this.inputTask.reset();
    this.eventTask.emit(task);

  }

  invalidMessage() {
    this.alertService.successfulMessage('Please enter a task.');
  }
}
