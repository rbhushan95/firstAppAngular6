import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownhelperComponent } from './dropdownhelper/dropdownhelper.component';

@NgModule({
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule
  ],
  declarations: [DropdownhelperComponent],
  exports: [DropdownhelperComponent]
})
export class ComponentsModule { }
