const FizzBuzz = require('../src/fizz_buzz');

describe('FizzBuzz', () => {
    let fizzBuzz;
    beforeEach(() => {
        fizzBuzz = new FizzBuzz();
    });

    it('it should return more than one number', () => {

        const fizzBuzzNumbers = fizzBuzz.returnNumbers();

        expect(Array.isArray(fizzBuzzNumbers)).toBe(true);
    });
    it('it should return 100 numbers', () => {

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

        it('is multiple of 3', () => {

            const fizzBuzzNumbers = fizzBuzz.returnNumbers();

            expect(fizzBuzzNumbers[2]).toBe('Fizz');
            expect(fizzBuzzNumbers[5]).toBe('Fizz');
            expect(fizzBuzzNumbers[8]).toBe('Fizz');


        });
        it('contains number 3', () => {

            const fizzBuzzNumbers = fizzBuzz.returnNumbers();

            expect(fizzBuzzNumbers[12]).toBe('Fizz');
            expect(fizzBuzzNumbers[22]).toBe('Fizz');
            expect(fizzBuzzNumbers[42]).toBe('Fizz');


        });

    });
    describe('Is Buzz when', () => {

        it('is multiple of 5', () => {

            const fizzBuzzNumbers = fizzBuzz.returnNumbers();

            expect(fizzBuzzNumbers[4]).toBe('Buzz');
            expect(fizzBuzzNumbers[9]).toBe('Buzz');
            expect(fizzBuzzNumbers[19]).toBe('Buzz');


        });
        it('contains number 5', () => {

            const fizzBuzzNumbers = fizzBuzz.returnNumbers();

            expect(fizzBuzzNumbers[51]).toBe('Buzz');
            expect(fizzBuzzNumbers[57]).toBe('Buzz');
            expect(fizzBuzzNumbers[58]).toBe('Buzz');


        });

    });
    describe('Is FizzBuzz when', () => {

        it('is multiple of 15', () => {

            const fizzBuzzNumbers = fizzBuzz.returnNumbers();

            expect(fizzBuzzNumbers[14]).toBe('FizzBuzz');
            expect(fizzBuzzNumbers[29]).toBe('FizzBuzz');
            expect(fizzBuzzNumbers[44]).toBe('FizzBuzz');


        });
        it('contains numbers 3 and 5', () => {

            const fizzBuzzNumbers = fizzBuzz.returnNumbers();

            expect(fizzBuzzNumbers[34]).toBe('FizzBuzz');
            expect(fizzBuzzNumbers[52]).toBe('FizzBuzz');

        });
        it('is multiple of 3 and contains number 5', () => {

            const fizzBuzzNumbers = fizzBuzz.returnNumbers();

            expect(fizzBuzzNumbers[50]).toBe('FizzBuzz');
            expect(fizzBuzzNumbers[53]).toBe('FizzBuzz');

        });
    });

});
