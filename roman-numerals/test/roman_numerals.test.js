let RomanNumerals = require('../src/roman_numerals');

describe('Roman Numerals', () => {
  it('converts number 1 to Roman Numeral', () => {
    let romanNumerals = new RomanNumerals();

    expect(romanNumerals.changeThisName(1)).toBe('I');
  });
  it('converts number 5 to Roman Numeral', () => {
    let romanNumerals = new RomanNumerals();

    expect(romanNumerals.changeThisName(5)).toBe('V');
  });
});
