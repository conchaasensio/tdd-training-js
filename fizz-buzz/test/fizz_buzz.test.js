const FizzBuzz = require('../src/fizz_buzz');

describe('FizzBuzz', () => {
  it('should return more than one number', () => {

    const fizzBuzz = new FizzBuzz();

    const fizzBuzzNumbers = fizzBuzz.returnNumbers();

    expect(Array.isArray(fizzBuzzNumbers)).toBe(true);
  });
});
