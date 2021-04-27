let RomanNumerals = require('../src/roman_numerals');

describe('Roman Numerals', () => {
  it('converts number 1 to Roman Numeral', () => {
    let romanNumerals = new RomanNumerals();

    expect(romanNumerals.convert(1)).toBe('I');
  });
  it('converts number 5 to Roman Numeral', () => {
    let romanNumerals = new RomanNumerals();

    expect(romanNumerals.convert(5)).toBe('V');
  });
  it('converts number 10 to Roman Numeral', () => {
    let romanNumerals = new RomanNumerals();

    expect(romanNumerals.convert(10)).toBe('X');
  });
  it('converts number 50 to Roman Numeral', () => {
    let romanNumerals = new RomanNumerals();

    expect(romanNumerals.convert(50)).toBe('L');
  });
  it('converts number 100 to Roman Numeral', () => {
    let romanNumerals = new RomanNumerals();

    expect(romanNumerals.convert(100)).toBe('C');
  });
  it('converts number 500 to Roman Numeral', () => {
    let romanNumerals = new RomanNumerals();

    expect(romanNumerals.convert(500)).toBe('D');
  });
  it('converts number 1000 to Roman Numeral', () => {
    let romanNumerals = new RomanNumerals();

    expect(romanNumerals.convert(1000)).toBe('M');
  });
  it('converts number 2 to Roman Numeral', () => {
    let romanNumerals = new RomanNumerals();

    expect(romanNumerals.convert(2)).toBe('II');
  });
  it('converts number 3 to Roman Numeral', () => {
    let romanNumerals = new RomanNumerals();

    expect(romanNumerals.convert(3)).toBe('III');
  });
});
