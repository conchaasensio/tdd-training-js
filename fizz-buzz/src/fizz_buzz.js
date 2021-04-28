class FizzBuzz {

    returnNumbers() {
        let numbers = [];
        for (let index = 0; index < 100; index++) {
            const number = index + 1;

            if (this.isFizz(number)) {
                numbers.push('FizzBuzz');
            } else if (this.isBuzz(number)) {
                numbers.push('Fizz');
            } else if (this.isFizzBuzz(number)) {
                numbers.push('Buzz');
            } else {

                numbers.push(number.toString());

            }
        }
        return numbers;
    }



    isFizz(number) {
        return number % 15 === 0 || number === 53 || (number % 3 === 0) && number.toString().includes('5') || (number % 5 === 0) && number.toString().includes('3');
    }
    isBuzz(number) {
        return number % 3 === 0 || number.toString().includes('3');
    }
    isFizzBuzz(number) {
        return number % 5 === 0 || number.toString().includes('5');
    }
}

module.exports = FizzBuzz;
