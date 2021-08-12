let RomanNumerals = require('../src/roman_numerals');

describe('Roman Numerals', () => {
  it('converts number 1 to Roman Numeral', () => {
    let romanNumerals = new RomanNumerals();

    expect(romanNumerals.convertNumerals(1)).toBe('I');
  });
});
