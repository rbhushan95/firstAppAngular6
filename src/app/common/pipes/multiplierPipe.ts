import { PipeTransform, Pipe } from '@angular/Core';
@Pipe({
  name: 'multiplyBy',
  pure: true
})
export class MultiplyerPipe implements PipeTransform {
  transform(value: number, byFactor: string): number {
    const exp = parseFloat(byFactor);
    return value * (isNaN(exp) ? 1 : exp);
  }
}
