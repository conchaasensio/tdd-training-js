class RomanNumerals {
  convertNumerals(number) {
    let romanNumerals = {
      1: 'I',
      4: 'IV',
      5: 'V',
      9: 'IX',
      10: 'X',
      50: 'L',
      100: 'C',
      500: 'D',
      1000: 'M'
    };

    if (romanNumerals[number] !== undefined) {
      return romanNumerals[number];
    }
    let decimalNumber = Object.keys(romanNumerals);
    for (let i = 0; i < decimalNumber.length ; i++) {
      if (number > decimalNumber[i] && number < decimalNumber[i+1]) {
        return this.convertNumerals(number - 1) + 'I' ;
      }
    }
  }
}

module.exports = RomanNumerals;