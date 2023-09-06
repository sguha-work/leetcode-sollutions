var intToRoman = function (number) {
  let length = number.toString().length;
  let multiplier = 1;
  let romanNumber = '';
  while (length) {
    const digit = number % 10;
    number = Math.floor(number / 10);
    switch (multiplier) {
      case 1:
        switch(digit) {
          case 5:
          romanNumber = 'V';
          break;
          case 4:
          romanNumber = 'IV';
          break;
          case 6:
          romanNumber = 'VI';
          break;
          case 7:
          romanNumber = 'VII';
          break;
          case 8:
          romanNumber = 'VIII';
          break;
          case 9:
          romanNumber = 'IX';
          break;
          default:
          for(let index =1; index<=digit; index++) {
            romanNumber += 'I';
          } 
          break;
        }
        break;
      case 10:
        switch (digit) {
          case 5:
          romanNumber = 'L' + romanNumber;
          break;
          case 4:
          romanNumber = 'XL' + romanNumber;
          break;
          case 9:
          romanNumber = 'XC' + romanNumber;
          break;
          case 6:
          romanNumber = tempNumber('L','X', digit) + romanNumber;
          break;
          case 7:
          romanNumber = tempNumber('L','X', digit) + romanNumber;
          break;
          case 8:
          romanNumber = tempNumber('L','X', digit) + romanNumber;
          break;
          default:
          for (let index = 0; index < digit; index++) {
            romanNumber = 'X' + romanNumber;
          }
          break;
        }
        break;
      case 100:
        switch(digit) {
          case 5:
          romanNumber = 'D' + romanNumber;
          break;
          case 4:
          romanNumber = 'CD' + romanNumber;
          break;
          case 9:
          romanNumber = 'CM' + romanNumber;
          break;
          case 6:
          romanNumber = tempNumber('D','C', digit) + romanNumber;
          break;
          case 7:
          romanNumber = tempNumber('D','C', digit) + romanNumber;
          break;
          case 8:
          romanNumber = tempNumber('D','C', digit) + romanNumber;
          break;
          default:
          for (let index = 0; index < digit; index++) {
            romanNumber = 'C' + romanNumber;
          }
          break;
        }
       break;
       case 1000:
          for (let index = 0; index < digit; index++) {
            romanNumber = 'M' + romanNumber;
          }
        
        break;
        default:
        break;
    }
    multiplier *= 10;
    length -=1;
  }
  return romanNumber;
};
const tempNumber = (startDigit, digitToRepeat, number, subtractNumber=5)=>{
let temp = startDigit;
          for (index = 0; index < number - subtractNumber; index++) {
            temp += digitToRepeat;
          }
          return temp;
}
intToRoman(5999 );
