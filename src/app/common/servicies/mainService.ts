import { Injectable } from '@angular/core';
import {
  Http,
  Headers,
  Response,
  Request,
  BaseRequestOptions,
  RequestMethod,
  ResponseContentType
} from '@angular/http';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, filter, finalize, catchError } from 'rxjs/operators';

@Injectable()
export class MainService {
  constructor(private http: Http) {}
  post(url: string, body: any = {}) {
    return this.request(url, RequestMethod.Post, body);
  }

  get(url: string) {
    return this.request(url, RequestMethod.Get);
  }

  private request(
    url: string,
    method: RequestMethod,
    body?: any,
    isBlob = false
  ): Observable<Response> {
    const options = new BaseRequestOptions();
    options.url = url;
    options.method = method;
    options.body = body;
    const request = new Request(options);
    return this.http
      .request(request)
      .pipe(catchError((error: any) => this.onErrorHandler(error)));
  }

  private onErrorHandler(error: any) {
    const errors = error.json();
    if (
      error.status === 406 &&
      Array.isArray(errors) &&
      errors.indexOf('User is not logged in.') !== -1
    ) {
    } else if (
      error.status === 401 &&
      Array.isArray(errors) &&
      errors.indexOf('CSRF validation failed') !== -1
    ) {
      // TODO: should logout after getting token
    }
    return Observable.throw(errors);
  }
}
