import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-chekc-list',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent {

  @Input() tasks: Task[] = [];
  @Output() removeEvent: EventEmitter<Task> = new EventEmitter();
  @Output() editEvent: EventEmitter<Task> = new EventEmitter();

  public removeTask(task: Task) {
    this.removeEvent.emit(task);
  }

  public editTask(task: Task) {
    this.editEvent.emit(task);
  }

  public changeStatus(event: any, task: Task) {

    const checked: boolean = event.target.checked;
    if (checked) {
      task.status = 'Completed';
    }

    if (!checked) {
      task.status = 'Pending';
    }
  }

}
