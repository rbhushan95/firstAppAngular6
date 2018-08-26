export class WillRemainAlive {
  initialArray: number[] = [];
  intermediateArray: number[] = [];
  shootPosition: number;
  firstTimeCall = true;
  constructor(numberOfPerson: number, firstShooterPosition: number) {
    this.shootPosition = firstShooterPosition;
    for (let index = 1; index <= numberOfPerson; index++) {
      this.initialArray.push(index);
    }
    this.intermediateArray = this.initialArray;
  }
  private isOdd(num) {
    return num % 2;
  }
  callTheNewLogic() {
    while (this.intermediateArray.length > 1) {
      // console.log(this.shootPosition);
      this.intermediateArray = this.byNewLogic(
        this.intermediateArray,
        this.shootPosition
      );
      console.log('Alive persons are ' + this.intermediateArray.toString());
    }
  }
  private byNewLogic = (
    numberArray: number[],
    initialPosition: number
  ): number[] => {
    const resultArray: number[] = [];
    if (initialPosition > 1) {
      for (let i = 0; i < numberArray.length; i++) {
        resultArray.push(numberArray[i]);
        i === initialPosition || i > initialPosition ? (i = i + 1) : (i = i);
      }
      this.firstTimeCall = false;
    } else if (this.firstTimeCall) {
      for (let i = 0; i < numberArray.length; i++) {
        resultArray.push(numberArray[i]);
        i === initialPosition || i > initialPosition ? (i = i + 1) : (i = i);
      }
      this.firstTimeCall = false;
    } else {
      for (let i = initialPosition; i < numberArray.length; i++) {
        resultArray.push(numberArray[i]);
        i = i + 1;
      }
    }

    numberArray[numberArray.length - 1] === resultArray[resultArray.length - 1]
      ? (this.shootPosition = 1)
      : (this.shootPosition = 0);

    return resultArray;
  }
}
