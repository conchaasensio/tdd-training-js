const FizzBuzz = require('../src/fizz_buzz');

describe('FizzBuzz', () => {
  it('it should return number 1', () => {

    const fizzBuzz = new FizzBuzz();

    const fizzBuzzNumbers = fizzBuzz.returnNumbers();

    expect(fizzBuzzNumbers).toBe(1);
  });
});
