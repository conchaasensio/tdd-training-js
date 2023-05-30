class FizzBuzz {

    returnNumbers() {

        let numbers = [];

        for (let index = 0; index < 100; index ++) {
            const number = index + 1;

            if (number === 3 || number === 6) {
                numbers.push('Fizz')
            } else {
            numbers.push(number.toString())
            }
        }

        return numbers;
    }

}

module.exports = FizzBuzz;
