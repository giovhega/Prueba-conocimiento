import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ConfirmComponent } from '../../components/confirm/confirm.component';
import { EditTaskComponent } from '../../components/edit-task/edit-task.component';
import { TrashComponent } from '../../components/trash/trash.component';
import { Task } from '../../interfaces/task.interface';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-client-manager',
  templateUrl: './client-manager.component.html',
  styleUrls: ['./client-manager.component.scss']
})
export class ClientManagerComponent implements OnInit {

  public tasksList: Task[] = [];
  public tasksListTemp: Task[] = [];
  public tasksListDelete: Task[] = [];

  public filterTitle: string = 'All';

  constructor(
    private taskService: TaskService,
    public dialog: MatDialog,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
   this.getTasksList();
  }

  public getTasksList(): void {
    this.taskService.getFilters().subscribe({
      next: (value) => {
        this.tasksList = value;
        this.tasksListTemp = [...this.tasksList];
      },
      error: (error) => {

      }
    });
  }

  public addTask(event: Task): void {
    this.tasksList.push(event);
    this.tasksListTemp = [...this.tasksList];
    this.alertService.successfulMessage('Task saved successfuly');
  }

  public confirmDialog(task: Task) {
    const result = this.dialog.open(ConfirmComponent, {
      data: { name: task.name}
    });

    result.afterClosed().subscribe({
      next: (value) => {
        if (value) {
          this.removeTask(task);
        }
      }
    });
  }

  private removeTask(task: Task): void {
    let index = this.tasksList.lastIndexOf(task);
    this.tasksList.splice(index, 1);

    index = this.tasksListTemp.lastIndexOf(task);
    this.tasksListTemp.splice(index, 1);
    this.tasksListDelete.push(task);
    this.alertService.successfulMessage('Task deleted successfully.');
  }

  public editTask(task: Task): void {
    const result = this.dialog.open(EditTaskComponent,  {
      data: {...task}
    });
    result.afterClosed().subscribe({
      next: (value) => {
        if (value) {
          task.name = value.name;
          this.alertService.successfulMessage('Task edited successfully.');
        }
        
      }
    });
  }

  public changeTitleFilter(event: string): void {

    if (event === 'All' || event === 'null') {
      this.tasksList = [...this.tasksListTemp];
    } 

    if (event !== 'All' && event !== 'null') {
      this.tasksList = this.tasksListTemp.filter(task => task.status === event);
    }
    
    this.filterTitle = event !== 'null' ? event : 'All';
  }

  public openTrash(): void {
    const result = this.dialog.open(TrashComponent, {
      data: this.tasksListDelete
    });

    result.afterClosed().subscribe({
      next: (value) => {
        if (value) {
          let title = value.temp1.length > 0 && value.temp1.length > 1 ? 'Tasks' : 'Task';
          this.tasksListDelete = [...value.temp2];
          this.tasksList.push(...value.temp1);
          this.tasksListTemp.push(...value.temp1);

          this.alertService.successfulMessage(`${title} restored successfully.`);
        }
      }
    });
  }


}
