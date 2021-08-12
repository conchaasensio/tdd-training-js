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
    };

    if (romanNumerals[number] !== undefined) {
      return romanNumerals[number];
    } else if (number >= 2 && number < 4) {
      return 'I' + this.convertNumerals(number - 1);
    } else if (number === 4) {
      return 'IV';
    } else if (number >= 6 && number <= 8) {
      return this.convertNumerals(number - 1) + 'I';
    } else if (number === 9) {
      return 'IX';
    } else if (number >= 11 && number < 14) {
      return this.convertNumerals(number - 1) + 'I';
    }
  }
}

module.exports = RomanNumerals;