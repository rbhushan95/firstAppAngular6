import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalExceptionHandler implements ErrorHandler {
  constructor() {}
  handleError(error) {
    console.log('Hello we got exception in the UI');
    // IMPORTANT: Rethrow the error otherwise it gets swallowed
    throw error;
  }
}
