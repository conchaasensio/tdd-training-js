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

            expect(fizzBuzzNumbers[1-1]).toBe('1');
        });

        it('is number 2', () => {

            const fizzBuzzNumbers = fizzBuzz.returnNumbers();

            expect(fizzBuzzNumbers[2-1]).toBe('2');
        });

        it('is number 4', () => {

            const fizzBuzzNumbers = fizzBuzz.returnNumbers();

            expect(fizzBuzzNumbers[4-1]).toBe('4');
        });

    });

    describe('Is Fizz when', () => {
        it('is multiple of 3', () => {

            const fizzBuzzNumbers = fizzBuzz.returnNumbers();

            expect(fizzBuzzNumbers[3-1]).toBe('Fizz');
            expect(fizzBuzzNumbers[6-1]).toBe('Fizz');
            expect(fizzBuzzNumbers[9-1]).toBe('Fizz');
        });

        it('has a 3 in it', () => {
            const fizzBuzzNumbers = fizzBuzz.returnNumbers();

            expect(fizzBuzzNumbers[13-1]).toBe('Fizz');
            expect(fizzBuzzNumbers[23-1]).toBe('Fizz');
            expect(fizzBuzzNumbers[43-1]).toBe('Fizz');
        });
    });

    describe('Is Buzz when', () => {
        it('is multiple of 5', () => {

            const fizzBuzzNumbers = fizzBuzz.returnNumbers();

            expect(fizzBuzzNumbers[5-1]).toBe('Buzz');
            expect(fizzBuzzNumbers[10-1]).toBe('Buzz');
            expect(fizzBuzzNumbers[20-1]).toBe('Buzz');
        });

        it('has a 5 in it', function () {
            const fizzBuzzNumbers = fizzBuzz.returnNumbers();

            expect(fizzBuzzNumbers[52-1]).toBe('Buzz');
            expect(fizzBuzzNumbers[58-1]).toBe('Buzz');
            expect(fizzBuzzNumbers[59-1]).toBe('Buzz');
        });
    });

    describe('Is FizzBuzz when', () => {
        it('is multiple of 15', () => {

            const fizzBuzzNumbers = fizzBuzz.returnNumbers();

            expect(fizzBuzzNumbers[15-1]).toBe('FizzBuzz');
            expect(fizzBuzzNumbers[30-1]).toBe('FizzBuzz');
            expect(fizzBuzzNumbers[45-1]).toBe('FizzBuzz');
        });

        it('has a 3 and a 5 in it', () => {
            const fizzBuzzNumbers = fizzBuzz.returnNumbers();

            expect(fizzBuzzNumbers[35-1]).toBe('FizzBuzz');
            expect(fizzBuzzNumbers[53-1]).toBe('FizzBuzz');
        });
    });
});
