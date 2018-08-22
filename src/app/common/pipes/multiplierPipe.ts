import { PipeTransform, Pipe } from '@angular/core';

export class MultiplyerPipe implements PipeTransform {
  transform(value: number, byFactor: string): number {
    const exp = parseFloat(byFactor);
    return value * (isNaN(exp) ? 1 : exp);
  }
}
