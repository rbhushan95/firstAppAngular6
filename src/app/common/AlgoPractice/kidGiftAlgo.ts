export class KidGiftAlgo {
  getTheLastGiftHolder(
    numberOfKids: number,
    numberOfGift: number,
    startingPosition: number
  ) {
    if (numberOfGift < numberOfKids) {
      this.getTheFinalPosition(numberOfKids, numberOfGift, startingPosition);
    } else {
      this.getTheFinalPosition(
        numberOfKids,
        numberOfGift % numberOfKids,
        startingPosition
      );
    }
  }

private  getTheFinalPosition(
    numberOfLikds: number,
    absolutePosition: number,
    startingPosition: number
  ): number {
    let result = 0;
    result = (absolutePosition + startingPosition - 1);
    if (result > numberOfLikds) {
      result = result - numberOfLikds;
    }
    console.log(result);
    return result;
  }
}
