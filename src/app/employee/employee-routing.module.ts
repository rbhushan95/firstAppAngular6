import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpdashboardComponent } from './empdashboard/empdashboard.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';

const routes: Routes = [
  {
    path: '',
    component: EmpdashboardComponent,
      children: [
      { path: 'add', component: AddemployeeComponent },
      { path: 'edit', component: EditemployeeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {}
