import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { AuthHttp } from '../../common/servicies/authHttp';
import { GreatestCommonFactor } from '../../common/AlgoPractice/greatestCommonFactor';

@Component({
  selector: 'app-empdashboard',
  templateUrl: './empdashboard.component.html',
  styleUrls: ['./empdashboard.component.css']
})
export class EmpdashboardComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}
  greatestCommonFactor: GreatestCommonFactor = new GreatestCommonFactor();
  ngOnInit() {}
  callMe = () => {
    //  console.log(this.employeeService.getEmployeeList());
    // console.log(this.employeeService.getValueByBasicCall());
    this.greatestCommonFactor.byDivisionMethod(14 , 48);
    this.greatestCommonFactor.bySubstractMethod(14 , 48);
  }
}
