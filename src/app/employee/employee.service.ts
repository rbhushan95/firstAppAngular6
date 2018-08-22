import { Injectable } from '@angular/core';
import { AuthHttp } from '../common/servicies/authHttp';
import { Employee } from './entities/employee';
import { productDataService } from './productsService';
import {
  RequestOptionsArgs,
  RequestOptions,
  Http,
  Headers,
  Jsonp
} from '@angular/http';
import { map, filter, finalize } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  productService: productDataService;
  requestOption: RequestOptionsArgs;
  constructor(private service: AuthHttp, private http: Http) {}

  observerhandle = {
    next: val => {
      console.log('please check to get the vale here ' + val);
      console.log(val);
    },
    error: val => {
      console.log(val);
      throw new Error('sever has some issue' + val);
    }
  };

  employee: Employee;
  getEmployeeList = () => {
    // const headers = new Headers();
    // headers.append('Access-Control-Allow-Origin', 'http://localhost:57170');
    // headers.append('Access-Control-Request-Method', 'get');
    // headers.append('Access-Control-Request-Headers', 'x-requested-with');
    // headers.append('Access-Control-Allow-Headers', '*');
    // const options = new RequestOptions({ headers: headers });
    // console.log('called by angular ');
    this.service
      .get('http://localhost:57170/api/values', null)
      .subscribe(this.observerhandle);
  }
  getValueByBasicCall = () => {
    this.http
      .request('http://localhost:57170/api/values', null)
      .pipe(map(res => res.json()))
      .subscribe(this.observerhandle,
      );
  }
  getAllProduct = (): any => {
    return this.productService.getProducts();
  }
  public getAll(): any {
    return this.productService.getProducts();
  }
}
