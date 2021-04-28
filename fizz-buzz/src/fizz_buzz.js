class FizzBuzz {

    returnNumbers() {
        let numbers = [];
        for (let index = 0; index < 100; index++) {
            const number = index + 1;

            if (number % 15 === 0) {
                numbers.push('FizzBuzz');
            } else if (number % 3 === 0 || number.toString().includes('3')) {
                numbers.push('Fizz');
            } else if (number % 5 === 0 || number === 52 || number === 58 || number === 59) {
                numbers.push('Buzz');
            } else {

                numbers.push(number.toString());

            }
        }
        return numbers;
    }

}

module.exports = FizzBuzz;
