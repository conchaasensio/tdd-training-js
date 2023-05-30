class FizzBuzz {

    returnNumbers() {

        let numbers = [];

        for (let index = 0; index < 100; index ++) {
            const number = index + 1;
            numbers.push(number.toString())
        }

        return numbers;
    }

}

module.exports = FizzBuzz;
