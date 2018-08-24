export class WillRemainAlive {
  initialArray: number[] = [];
  intermediateArray: number[] = [];
  shootPosition: number;
  callOddMethod = true;
  constructor(numberOfPerson: number, firstShooterPosition: number) {
    this.shootPosition = firstShooterPosition;
    for (let index = 1; index <= numberOfPerson; index++) {
      this.initialArray.push(index);
    }
    this.intermediateArray = this.initialArray;
  }
  getThePersonNumber() {}
  // shooting start at position in any case
  basicShooting() {
    if (this.initialArray.length >= 1) {
      while (this.intermediateArray.length !== 1) {
        if (this.callOddMethod) {
          this.intermediateArray = this.oddPositionData(this.intermediateArray);
          this.callOddMethod = !this.callOddMethod;
        } else {
          this.intermediateArray = this.evenPositionData(this.intermediateArray);
          this.callOddMethod = !this.callOddMethod;
        }
      }
      console.log(this.intermediateArray);
    }
  }

 private oddPositionData(numberArray: number[]): number[] {
    const resultArray: number[] = [];
    for (let i = 0; i < numberArray.length; i++) {
      if (i % 2 !== 0) {
        resultArray.push(numberArray[i]);
      }
    }
    console.log('from odd:-' + resultArray);
    return resultArray;
  }
  private evenPositionData(numberArray: number[]): number[] {
    const resultArray: number[] = [];
    for (let i = 0; i < numberArray.length; i++) {
      if (i % 2 === 0) {
        resultArray.push(numberArray[i]);
      }
    }
    console.log('from even:-' + resultArray);
    return resultArray;
  }
}
