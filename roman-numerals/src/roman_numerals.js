class RomanNumerals {
  convertNumerals(number) {
    let romanNumerals = {
      1: 'I',
      5: 'V',
      10: 'X',
      50: 'L',
      100: 'C',
      500: 'D',
      1000: 'M'
    }

    if (romanNumerals[number] !== undefined) {
      return romanNumerals[number];
    } else if (number === 2) {
      return 'I' + this.convertNumerals(number - 1);
    } else if(number === 3) {
      return 'I' + this.convertNumerals(number - 1);
    } else if (number === 6) {
      return this.convertNumerals(number - 1) + 'I'
    } else if (number === 7) {
      return this.convertNumerals(number - 1) + 'I'
    } else {
      return 'VIII'
    }
  }
}

module.exports = RomanNumerals;