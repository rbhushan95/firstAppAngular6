import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { AddaddressComponent } from './addaddress/addaddress.component';
import { EditaddressComponent } from './editaddress/editaddress.component';
import { AddressdashboardComponent } from './addressdashboard/addressdashboard.component';

@NgModule({
  imports: [CommonModule, AddressRoutingModule],
  declarations: [
    AddaddressComponent,
    EditaddressComponent,
    AddressdashboardComponent
  ],
  exports: [
    AddaddressComponent,
    EditaddressComponent,
    AddressdashboardComponent
  ]
})
export class AddressModule {}
