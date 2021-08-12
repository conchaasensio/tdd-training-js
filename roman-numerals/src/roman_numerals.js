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
    if (number > 1 && number < 4) {
      return this.convertNumerals(number - 1) + 'I' ;
    } else if (number > 5 && number < 9) {
      return this.convertNumerals(number - 1) + 'I';
    } else if (number > 10 && number < 50) {
      return this.convertNumerals(number - 1) + 'I';
    }
  }
}

module.exports = RomanNumerals;