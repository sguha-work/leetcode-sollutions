var intToRoman = function (number) {
  const predefinedValue = {
    "1": "I",
    "5": "V",
    "10": "X",
    "50": "L",
    "100": "C",
    "500": "D",
    "1000": "M"
  };
  let digitArray = []
  while (number > 0) {
    digitArray.push(number % 10);
    number = Math.floor(number / 10);
  }
  //digitArray.reverse();
  console.log(digitArray);
  let multiplier = 1;
  let romanNumber = '';
  while (digitArray.length) {
    const digit = digitArray[0];
    switch (multiplier) {
      case 1:
        if (digit == 5)
          romanNumber = 'V';
        else if (digit == 1) {
          romanNumber = 'I';
        }
        else if (digit == 2) {
          romanNumber = 'II';
        }
        else if (digit == 3) {
          romanNumber = 'III';
        }
        else if (digit == 4) {
          romanNumber = 'IV';
        }
        else if (digit == 6) {
          romanNumber = 'VI';
        }
        else if (digit == 7) {
          romanNumber = 'VII';
        }
        else if (digit == 8) {
          romanNumber = 'VIII';
        }
        else if (digit == 9) {
          romanNumber = 'IX';
        }
        break;
      case 10:
        if (digit == 5) {
          romanNumber = 'L' + romanNumber;
        } else if (digit == 4) {
          romanNumber = 'XL' + romanNumber;
        } else if (digit == 9) {
          romanNumber = 'XC' + romanNumber;
        } else if (digit > 5) {
          let temp = 'L';
          for (index = 0; index < digit - 5; index++) {
            temp += 'X';
          }
          romanNumber = temp + romanNumber;
        } else {
          for (let index = 0; index < digit; index++) {
            romanNumber = 'X' + romanNumber;
          }
        }
        break;
      case 100:
        if (digit == 5) {
          romanNumber = 'D' + romanNumber;
        } else if (digit == 4) {
          romanNumber = 'CD' + romanNumber;
        } else if (digit == 9) {
          romanNumber = 'CM' + romanNumber;
        } else if (digit > 5) {
          let temp = 'D';
          for (index = 0; index < digit - 5; index++) {
            temp += 'C';
          }
          romanNumber = temp + romanNumber;
        } else {
          for (let index = 0; index < digit; index++) {
            romanNumber = 'C' + romanNumber;
          }
        }
        break;
       case 1000:
          for (let index = 0; index < digit; index++) {
            romanNumber = 'M' + romanNumber;
          }
        
        break;
    }
    digitArray.shift();
    multiplier *= 10;

  }

  console.log(romanNumber);
};

intToRoman(5999 );
