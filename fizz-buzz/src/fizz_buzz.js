class FizzBuzz {

    returnNumbers() {

        let numbers = [];

        for (let index = 0; index < 100; index++) {
            const number = index + 1;

            if (number % 3 === 0) {
                numbers.push('Fizz')
            } else if (number === 5 || number === 10) {
                numbers.push('Buzz')
            } else {
                numbers.push(number.toString())
            }
        }

        return numbers;
    }

}

module.exports = FizzBuzz;
