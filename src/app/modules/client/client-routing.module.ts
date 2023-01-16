import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientManagerComponent } from './pages/client-manager/client-manager.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'clients',
        component: ClientManagerComponent
      },
      {
        path: '**',
        redirectTo: 'clients'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
