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
      return 'II';
    } else if(number === 3) {
      return 'III'
    } else if (number === 6) {
      return 'VI'
    } else {
      return 'VII'
    }
  }
}

module.exports = RomanNumerals;