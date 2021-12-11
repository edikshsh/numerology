export class HelperFunctions{

    reduceNumberArrayToSingleDigit(...args: number[]): number {
        let result = 0
        args.forEach(num => {
          result += this.reduceNumberToSingleDigit(num)
        });
    
        return this.reduceNumberToSingleDigit(result);
      }
    
    //   reduceNumberArrayToSingleDigitSpecial(...args: number[]): number {
    //     let result = 0
    //     args.forEach(num => {
    //       result += this.reduceNumberToSingleDigit(num)
    //     });
    
    //     return this.reduceNumberToSingleDigit(result, [11, 22]);
    //   }
    
      reduceNumberToSingleDigit(num: number, ignore: number[] = []) {
        while (num >= 10 && !ignore.find((ignoredNumber) => num == ignoredNumber)) {
          // let tempResult = 0;
          // while (num != 0) {
          //   tempResult += num % 10
          //   num = Math.floor(num / 10)
          // }
          // num = tempResult
          num = this.sumDigits(num)
        }
        console.log('reduceNumberToSingleDigit returning ' + num)
        return num;
      }
    
      // need to check
      sumDigits(...numbers:number[]){
        //   if (typeof(num) ==  Number)

        // let sum = 0;
        return numbers.reduce((sum,num)=>sum += this.toDigits(num).reduce((digSum, dig) => digSum += dig));
      }
    
      toDigits(num: number):number[] {
        let digits: number[] = []
        while (num != 0) {
          digits.push(num % 10)
          num = Math.floor(num / 10)
        }
        return digits.reverse();
      }
    
      /**
       * 
       * @param num number
       * @param digit digit to get, range = [-len,len]
       * @returns 
       */
      digit(num: number, digit: number) {
        if (digit < 0)
          digit = num.toString().length + digit + 1
        return Math.floor(num / Math.pow(10, num.toString().length - digit)) % 10;
      }
    
      keepInRange(num: number, min: number = 1, max: number = 9) {
        let dif = max - min + 1;
        if (num > max) num -= dif * (Math.ceil((num - max) / dif))
        else if (num < min) num += dif * (Math.ceil((min - num) / dif))
        return num;
      }

}