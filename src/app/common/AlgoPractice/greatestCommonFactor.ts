export class GreatestCommonFactor {
  localValue = 0;
  byDivisionMethod(numberOne: number, numberTwo: number): number {
    const maxNumber: number = Math.max(numberOne, numberTwo);
    let minNumber = 0;
    minNumber =   Math.min(numberOne, numberTwo);
    const reminder = maxNumber % minNumber;
    if (reminder === 0) {
      console.log(minNumber);
      return minNumber;
    } else {
      this.byDivisionMethod(reminder, minNumber);
    }
  }
  bySubstractMethod(numberOne: number, numberTwo: number): number {
    const maxNumber = Math.max(numberOne, numberTwo);
    let minNumber = 0;
    minNumber = Math.min(numberOne, numberTwo);
    if (maxNumber - minNumber === 0) {
      console.log(minNumber);
      return minNumber;
    } else {
      this.bySubstractMethod(minNumber, maxNumber - minNumber);
    }
  }
}
