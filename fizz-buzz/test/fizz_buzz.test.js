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
  it('should return number 4', () => {

    const fizzBuzz = new FizzBuzz();

    const fizzBuzzNumbers = fizzBuzz.returnNumbers();

    expect(fizzBuzzNumbers[3]).toBe('4');

  });
  it('should return 100 numbers', () => {

    const fizzBuzz = new FizzBuzz();

    const fizzBuzzNumbers = fizzBuzz.returnNumbers();

    expect(fizzBuzzNumbers.length).toBe(100);

  });
  it('should return Fizz instead of 3', () => {

    const fizzBuzz = new FizzBuzz();

    const fizzBuzzNumbers = fizzBuzz.returnNumbers();

    expect(fizzBuzzNumbers[2]).toBe('Fizz');

  });
  it('should return Fizz instead of 6', () => {

    const fizzBuzz = new FizzBuzz();

    const fizzBuzzNumbers = fizzBuzz.returnNumbers();

    expect(fizzBuzzNumbers[5]).toBe('Fizz');

  });
  it('should return Fizz instead of 9', () => {

    const fizzBuzz = new FizzBuzz();

    const fizzBuzzNumbers = fizzBuzz.returnNumbers();

    expect(fizzBuzzNumbers[8]).toBe('Fizz');

  });
});
