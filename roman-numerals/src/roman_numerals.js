class RomanNumerals {
  convert(number) {
    let romanNumbers = {
      1: 'I',
      5: 'V',
      10: 'X',
      50: 'L',
      100: 'C',
      500: 'D',
      1000: 'M',
    }

      if (romanNumbers[number] !== undefined) {
          return romanNumbers[number];

      } else {
          return 'II';
      }


  }
}

module.exports = RomanNumerals;
