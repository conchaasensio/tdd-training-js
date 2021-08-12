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

  it('converts number 50 to Roman Numeral', () => {
    let romanNumerals = new RomanNumerals();

    expect(romanNumerals.convertNumerals(50)).toBe('L');
  });

  it('converts number 100 to Roman Numeral', () => {
    let romanNumerals = new RomanNumerals();

    expect(romanNumerals.convertNumerals(100)).toBe('C');
  });

  it('converts number 500 to Roman Numeral', () => {
    let romanNumerals = new RomanNumerals();

    expect(romanNumerals.convertNumerals(500)).toBe('D');
  });

  it('converts number 1000 to Roman Numeral', () => {
    let romanNumerals = new RomanNumerals();

    expect(romanNumerals.convertNumerals(1000)).toBe('M');
  });

  it('converts number 2 to Roman Numeral', () => {
    let romanNumerals = new RomanNumerals();

    expect(romanNumerals.convertNumerals(2)).toBe('II');
  });

  it('converts number 3 to Roman Numeral', () => {
    let romanNumerals = new RomanNumerals();

    expect(romanNumerals.convertNumerals(3)).toBe('III');
  });

});
