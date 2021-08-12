let RomanNumerals = require('../src/roman_numerals');

describe('Roman Numerals', () => {
  it('converts number 1 to Roman Numeral', () => {
    let romanNumerals = new RomanNumerals();

    expect(romanNumerals.convertNumerals(1)).toBe('I');
  });

  it('converts number 5 to Roman Numeral', () => {
    let romanNumerals = new RomanNumerals();

    expect(romanNumerals.convertNumerals(5)).toBe('V');
  });

  it('converts number 10 to Roman Numeral', () => {
    let romanNumerals = new RomanNumerals();

    expect(romanNumerals.convertNumerals(10)).toBe('X');
  });

});
