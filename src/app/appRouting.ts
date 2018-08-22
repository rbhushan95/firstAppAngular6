import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'admin', component: DashboardComponent},
  {path: 'employee', loadChildren: './employee/employee.module#EmployeeModule'},
];

@NgModule({
  imports: [AdminModule, RouterModule.forRoot(routes)],
  exports: [AdminModule, RouterModule]
})
export class AppRoutingModule {}
