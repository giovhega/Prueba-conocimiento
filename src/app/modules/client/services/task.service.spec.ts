import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;
  let http: HttpClient;

  beforeEach(() => {
   service = new TaskService(http);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
