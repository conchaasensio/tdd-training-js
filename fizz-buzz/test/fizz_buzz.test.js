const FizzBuzz = require('../src/fizz_buzz');

describe('FizzBuzz', () => {
  it('should return number 1', () => {

    const fizzBuzz = new FizzBuzz();

    const fizzBuzzNumbers = fizzBuzz.returnNumbers();

    expect(fizzBuzzNumbers[0]).toBe('1');

  });
  it('should return more than one number', () => {

    const fizzBuzz = new FizzBuzz();

    const fizzBuzzNumbers = fizzBuzz.returnNumbers();

    expect(Array.isArray(fizzBuzzNumbers)).toBe(true);

  });
  it('should return number 2', () => {

    const fizzBuzz = new FizzBuzz();

    const fizzBuzzNumbers = fizzBuzz.returnNumbers();

    expect(fizzBuzzNumbers[1]).toBe('2');

  });

});
