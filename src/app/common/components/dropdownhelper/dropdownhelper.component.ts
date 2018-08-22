import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Form } from "@angular/forms";
import { DropdownData } from './dropdownData';

@Component({
  selector: 'app-dropdownhelper',
  templateUrl: './dropdownhelper.component.html',
  styleUrls: ['./dropdownhelper.component.css']
})
export class DropdownhelperComponent implements OnInit {

  @Input() public data: DropdownData[];
  @Output() onSelect: EventEmitter<DropdownData> = new EventEmitter();
  public optionSelected: {};

  constructor() { }

  ngOnInit() {
  }
  onOptionsSelected = (selectedValue: DropdownData) => {
    this.onSelect.emit(selectedValue);
  }

}
