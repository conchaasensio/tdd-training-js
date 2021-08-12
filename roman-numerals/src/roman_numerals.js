class RomanNumerals {
  convertNumerals(number) {
    if (number === 1) {
      return 'I';
    } else if (number === 5) {
      return 'V';
    } else if (number === 10) {
      return 'X';
    } else if (number === 50) {
      return 'L';
    } else if (number === 100) {
      return 'C';
    } else if (number === 500) {
      return 'D';
    }
  }
}

module.exports = RomanNumerals;