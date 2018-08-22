import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmpdashboardComponent } from './empdashboard/empdashboard.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { EmployeeService } from './employee.service';
import { JsonpModule } from '@angular/http';


@NgModule({
  imports: [
    CommonModule,
    JsonpModule,
    EmployeeRoutingModule
  ],
  providers: [EmployeeService],
  declarations: [EmpdashboardComponent, AddemployeeComponent, EditemployeeComponent],
  exports: [EmpdashboardComponent, AddemployeeComponent, EditemployeeComponent]
})
export class EmployeeModule { }
