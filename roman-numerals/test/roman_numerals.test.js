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
  it('converts number 10 to Roman Numeral', () => {
    let romanNumerals = new RomanNumerals();

    expect(romanNumerals.changeThisName(10)).toBe('X');
  });
  it('converts number 50 to Roman Numeral', () => {
    let romanNumerals = new RomanNumerals();

    expect(romanNumerals.changeThisName(50)).toBe('L');
  });
  it('converts number 100 to Roman Numeral', () => {
    let romanNumerals = new RomanNumerals();

    expect(romanNumerals.changeThisName(100)).toBe('C');
  });
  it('converts number 500 to Roman Numeral', () => {
    let romanNumerals = new RomanNumerals();

    expect(romanNumerals.changeThisName(500)).toBe('D');
  });
});
