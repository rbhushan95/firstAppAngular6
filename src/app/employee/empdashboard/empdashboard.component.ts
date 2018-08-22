import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { AuthHttp } from '../../common/servicies/authHttp';

@Component({
  selector: 'app-empdashboard',
  templateUrl: './empdashboard.component.html',
  styleUrls: ['./empdashboard.component.css'],
  })
export class EmpdashboardComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {}
  callMe = () => {
      //  console.log(this.employeeService.getEmployeeList());
       console.log(this.employeeService.getValueByBasicCall());
  }
}
