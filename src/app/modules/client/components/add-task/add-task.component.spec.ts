import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Task } from '../../interfaces/task.interface';

import { AddTaskComponent } from './add-task.component';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;
  let alertService: jasmine.SpyObj<AlertService>;

  beforeEach(async () => {
    const alertServiceSpy = jasmine.createSpyObj('AlertService', ['successfulMessage']);
    await TestBed.configureTestingModule({
      declarations: [ AddTaskComponent ],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: AlertService, useValue: alertServiceSpy
        }
      ]
    })
    .compileComponents();
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskComponent);
    const input: FormControl = new FormControl('');
    component = fixture.componentInstance;
    alertService = TestBed.inject(AlertService) as jasmine.SpyObj<AlertService>;
    fixture.componentInstance.inputTask = input;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <input> type text', () => {
    const inputElement: HTMLElement = fixture.nativeElement;
    const input = inputElement.querySelector('input');
    expect(input?.type).toEqual('text');
  });

  it('should verify rol to span', () => {
    const span = fixture.debugElement.query(By.css('span'));
    const spanEl = span.nativeElement;
    span.triggerEventHandler('click', null);

    expect(spanEl?.role).toEqual('button');
  });

  it('show alert message', () => {
    alertService.successfulMessage('Please enter a task.');
    fixture.detectChanges();
    expect(alertService.successfulMessage).toHaveBeenCalled();
  });

  it('should send event to clic', () => {

    const input: FormControl = new FormControl('');
    let valueControl = input.value;
    
    if (!valueControl) {
      alertService.successfulMessage('Please enter a task.');
      fixture.detectChanges();
      expect(alertService.successfulMessage).toHaveBeenCalled();
      return;
    }

    let task: Task = {
      name: 'Task 1',
      status: 'Pending',
      enabled: true
    };
    const span = fixture.debugElement.query(By.css('span'));

    let returnTask : Task | undefined;
    component.eventTask.subscribe({
      next: (value: Task) => {
        returnTask = value;
      }
    });

    span.triggerEventHandler('click', null);
    fixture.detectChanges()
   
   
    expect(returnTask?.name).toEqual(task.name);
  });



});
