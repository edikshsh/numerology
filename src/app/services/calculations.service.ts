import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationsService {

  constructor() {
    // console.log(this.toDigits(123));
    // console.log(this.toDigits(4123));
    // console.log(this.toDigits(1230));
    // console.log(this.toDigits(4123).reduce((sum, num) => sum + num));
    // console.log(this.digit(189423,6));
    // console.log(this.digit(189423,-2));

    // let min=-2
    // let max =2
    // for(let i=-5;i<10;i++){
    //   console.log(`${i} in range is ${this.keepInRange(i,min,max)}`);
    // }

    for (let i = 0; i < 100; i++) {
      let num = Math.ceil(Math.random() * 999)
      console.log(`${i} in range is ${this.keepInRange(num, 1, 9)} and reduce is ${this.reduceNumberToSingleDigit(num)}`);
    }
    

  }


  reduceNumberArrayToSingleDigit(...args: number[]): number {
    let result = 0
    args.forEach(num => {
      result += this.reduceNumberToSingleDigit(num)
    });

    return this.reduceNumberToSingleDigit(result);
  }

  reduceNumberArrayToSingleDigitSpecial(...args: number[]): number {
    let result = 0
    args.forEach(num => {
      result += this.reduceNumberToSingleDigit(num)
    });

    return this.reduceNumberToSingleDigit(result, [11, 22]);
  }

  reduceNumberToSingleDigit(num: number, ignore: number[] = []) {
    while (num >= 10 && !ignore.find((ignoredNumber) => num == ignoredNumber)) {
      // let tempResult = 0;
      // while (num != 0) {
      //   tempResult += num % 10
      //   num = Math.floor(num / 10)
      // }
      // num = tempResult
      num = this.toDigits(num).reduce((sum, num) => sum += num)
    }
    console.log('reduceNumberToSingleDigit returning ' + num)
    return num;
  }

  toDigits(num: number) {
    let digits: number[] = []
    while (num != 0) {
      digits.push(num % 10)
      num = Math.floor(num / 10)
    }
    return digits.reverse();
  }

  digit(num: number, digit: number) {
    if (digit < 0)
      digit = num.toString().length + digit + 1
    return Math.floor(num / Math.pow(10, num.toString().length - digit)) % 10;
  }

  keepInRange(num: number, min: number, max: number) {
    let dif = max - min + 1;
    if (num > max) num -= dif * (Math.ceil((num - max) / dif))
    if (num < min) num += dif * (Math.ceil((min - num) / dif))
    return num;

  }

}
