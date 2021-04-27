let RomanNumerals = require('../src/roman_numerals');

describe('Roman Numerals', () => {
  it('convert number 1 to Roman Numeral', () => {
    let romanNumerals = new RomanNumerals();

    expect(romanNumerals.changeThisName(1)).toBe('I');
  });
});
