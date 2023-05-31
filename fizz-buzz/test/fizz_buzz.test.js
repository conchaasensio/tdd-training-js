
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

        const numbers = [
            [0, '1'],
            [1, '2'],
            [3, '4']
        ];

        it.each(numbers)('returns number %s', (position, number) => {

            const fizzBuzzNumbers = fizzBuzz.returnNumbers();

            expect(fizzBuzzNumbers[position]).toBe(number);
        });
    })

    describe('FizzBuzz is Fizz when', () => {

        const word = [
            [3],
            [6],
            [9]
        ]

        it.each(word)('returns Fizz instead of %s', (number) => {

            const fizzBuzzNumbers = fizzBuzz.returnNumbers();

            let position = number-1;
            expect(fizzBuzzNumbers[position]).toBe('Fizz');
        });

    })

    describe('FizzBuzz is Buzz when', () => {
        it('returns Buzz instead of 5', () => {

            const fizzBuzzNumbers = fizzBuzz.returnNumbers();

            expect(fizzBuzzNumbers[4]).toBe('Buzz');

        });
        it('returns Buzz instead of 10', () => {

            const fizzBuzzNumbers = fizzBuzz.returnNumbers();

            expect(fizzBuzzNumbers[9]).toBe('Buzz');

        });
        it('returns Buzz instead of 20', () => {

            const fizzBuzzNumbers = fizzBuzz.returnNumbers();

            expect(fizzBuzzNumbers[19]).toBe('Buzz');

        });
    })
});
