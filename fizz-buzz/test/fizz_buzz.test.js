const FizzBuzz = require('../src/fizz_buzz');

describe('FizzBuzz', () => {
  let fizzBuzz;
  beforeEach(() => {
    fizzBuzz = new FizzBuzz();
  })
  it('should return more than one number', () => {

    const fizzBuzzNumbers = fizzBuzz.returnNumbers();

    expect(Array.isArray(fizzBuzzNumbers)).toBe(true);
  });

  it('should return 100 elements', () => {

    const fizzBuzzNumbers = fizzBuzz.returnNumbers();

    expect(fizzBuzzNumbers.length).toBe(100);
  });

  describe('FizzBuzz is a number when', () => {
    it('returns number 1', () => {

      const fizzBuzzNumbers = fizzBuzz.returnNumbers();

      expect(fizzBuzzNumbers[0]).toBe('1');
    });

    it('it returns number 2', () => {

      const fizzBuzzNumbers = fizzBuzz.returnNumbers();

      expect(fizzBuzzNumbers[1]).toBe('2');
    });

    it('returns number 4', () => {

      const fizzBuzzNumbers = fizzBuzz.returnNumbers();

      expect(fizzBuzzNumbers[3]).toBe('4');
    });
  })

  describe('FizzBuzz is Fizz when', () => {

    it('returns Fizz instead of 3', () => {

      const fizzBuzzNumbers = fizzBuzz.returnNumbers();

      expect(fizzBuzzNumbers[2]).toBe('Fizz');
    });

    it('returns Fizz instead of 6', () => {

      const fizzBuzzNumbers = fizzBuzz.returnNumbers();

      expect(fizzBuzzNumbers[5]).toBe('Fizz');
    });

    it('returns Fizz instead of 9', () => {

      const fizzBuzzNumbers = fizzBuzz.returnNumbers();

      expect(fizzBuzzNumbers[8]).toBe('Fizz');
    });
  })




});
