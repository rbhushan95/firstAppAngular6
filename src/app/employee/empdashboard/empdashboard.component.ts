import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { AuthHttp } from '../../common/servicies/authHttp';
import { GreatestCommonFactor } from '../../common/AlgoPractice/greatestCommonFactor';
import { KidGiftAlgo } from '../../common/AlgoPractice/kidGiftAlgo';
import { WillRemainAlive } from '../../common/AlgoPractice/willRemainAlive';

@Component({
  selector: 'app-empdashboard',
  templateUrl: './empdashboard.component.html',
  styleUrls: ['./empdashboard.component.css']
})
export class EmpdashboardComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}
  greatestCommonFactor: GreatestCommonFactor = new GreatestCommonFactor();
  kidGiftAlgo: KidGiftAlgo = new KidGiftAlgo();
  willRemainAlive: WillRemainAlive = new WillRemainAlive(19, 0);
  ngOnInit() {}
  callMe = () => {
    //  console.log(this.employeeService.getEmployeeList());
    // console.log(this.employeeService.getValueByBasicCall());
    // this.greatestCommonFactor.byDivisionMethod(14 , 48);
    // this.greatestCommonFactor.bySubstractMethod(14 , 48);
    //  console.log(this.kidGiftAlgo.getTheLastGiftHolder(3, 5, 1));
    //  console.log(this.kidGiftAlgo.getTheLastGiftHolder(3, 5, 2));
    //  console.log(this.kidGiftAlgo.getTheLastGiftHolder(3, 5, 3));
    //  console.log(this.kidGiftAlgo.getTheLastGiftHolder(3, 2, 1));
    //  console.log(this.kidGiftAlgo.getTheLastGiftHolder(3, 2, 3));
    //  console.log(this.kidGiftAlgo.getTheLastGiftHolder(3, 1, 1));
  this.willRemainAlive.callTheNewLogic();
  }
}
