const FizzBuzz = require('../src/fizz_buzz');

describe('FizzBuzz', () => {
  let fizzBuzz;
  beforeEach(() => {
    fizzBuzz = new FizzBuzz();
  });

  it('should return more than one number', () => {

    const fizzBuzzNumbers = fizzBuzz.returnNumbers();

    expect(Array.isArray(fizzBuzzNumbers)).toBe(true);

  });
  it('should return 100 numbers', () => {

    const fizzBuzzNumbers = fizzBuzz.returnNumbers();

    expect(fizzBuzzNumbers.length).toBe(100);

  });
  describe('Is number when', () => {
    it('is number 1', () => {

      const fizzBuzzNumbers = fizzBuzz.returnNumbers();

      expect(fizzBuzzNumbers[0]).toBe('1');

    });
    it('is number 2', () => {

      const fizzBuzzNumbers = fizzBuzz.returnNumbers();

      expect(fizzBuzzNumbers[1]).toBe('2');

    });
    it('is number 4', () => {

      const fizzBuzzNumbers = fizzBuzz.returnNumbers();

      expect(fizzBuzzNumbers[3]).toBe('4');

    });

  });
  describe('Is Fizz when', () => {
    it('is number 3', () => {

      const fizzBuzzNumbers = fizzBuzz.returnNumbers();

      expect(fizzBuzzNumbers[2]).toBe('Fizz');

    });
    it('is number 6', () => {

      const fizzBuzzNumbers = fizzBuzz.returnNumbers();

      expect(fizzBuzzNumbers[5]).toBe('Fizz');

    });
    it('is number 9', () => {

      const fizzBuzzNumbers = fizzBuzz.returnNumbers();

      expect(fizzBuzzNumbers[8]).toBe('Fizz');

    });
    it('is number 13', () => {

      const fizzBuzzNumbers = fizzBuzz.returnNumbers();

      expect(fizzBuzzNumbers[12]).toBe('Fizz');

    });
    it('is number 23', () => {

      const fizzBuzzNumbers = fizzBuzz.returnNumbers();

      expect(fizzBuzzNumbers[22]).toBe('Fizz');

    });

  });
  describe('Is Buzz when', ()=> {
    it('is number 5', () => {

      const fizzBuzzNumbers = fizzBuzz.returnNumbers();

      expect(fizzBuzzNumbers[4]).toBe('Buzz');

    });
    it('is number 10', () => {

      const fizzBuzzNumbers = fizzBuzz.returnNumbers();

      expect(fizzBuzzNumbers[9]).toBe('Buzz');

    });
    it('is number 20', () => {

      const fizzBuzzNumbers = fizzBuzz.returnNumbers();

      expect(fizzBuzzNumbers[19]).toBe('Buzz');

    });

  });
  describe('Is FizzBuzz when', ()=> {
    it('is number 15', () => {

      const fizzBuzzNumbers = fizzBuzz.returnNumbers();

      expect(fizzBuzzNumbers[14]).toBe('FizzBuzz');

    });
    it('is number 30', () => {

      const fizzBuzzNumbers = fizzBuzz.returnNumbers();

      expect(fizzBuzzNumbers[29]).toBe('FizzBuzz');

    });
    it('is number 45', () => {

      const fizzBuzzNumbers = fizzBuzz.returnNumbers();

      expect(fizzBuzzNumbers[44]).toBe('FizzBuzz');

    });
  });
});
