import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { UserguidComponent } from './userguid/userguid.component';

@NgModule({
  imports: [CommonModule, AdminRoutingModule],
  declarations: [ DashboardComponent, UserguidComponent],
  exports: [ DashboardComponent, UserguidComponent]
})
export class AdminModule {}
