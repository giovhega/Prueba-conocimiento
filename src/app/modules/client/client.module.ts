import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { ClientManagerComponent } from './pages/client-manager/client-manager.component';
import { FilterSelectComponent } from './components/filter-select/filter-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { MaterialModule } from '../material/material.module';
import { TrashComponent } from './components/trash/trash.component';
import { ConfirmComponent } from './components/confirm/confirm.component';


@NgModule({
  declarations: [
    AddTaskComponent,
    ClientManagerComponent,
    ConfirmComponent,
    EditTaskComponent,
    FilterSelectComponent,
    ListTaskComponent,
    TrashComponent,

  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class ClientModule { }
