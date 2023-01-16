import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task.interface';

const url: string = 'assets/temp_data.json';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private httpclient: HttpClient
  ) { }

  public getFilters(): Observable<Task[]> {
    return this.httpclient.get<Task[]>(url);
  }

}
