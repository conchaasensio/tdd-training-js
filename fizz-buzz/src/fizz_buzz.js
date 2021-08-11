class FizzBuzz {
    returnNumbers() {
        let numbers = [];
        for (let index = 0; index < 100; index++) {
            const number = index + 1;

            if (this.isFizzBuzz(number)) {
                numbers.push('FizzBuzz');
            } else if (this.isFizz(number)) {
                numbers.push('Fizz');
            } else if (this.isBuzz(number)) {
                numbers.push('Buzz')
            } else {
                numbers.push(number.toString());
            }
        }
        return numbers;
    }

    isFizzBuzz(number) {
        return this.isFizz(number) && this.isBuzz(number);
    }

    isFizz(number) {
        return this.isMultipleOf(number, 3) || this.includesNumber(number, '3');
    }

    isBuzz(number) {
        return this.isMultipleOf(number, 5) || this.includesNumber(number, '5');
    }

    isMultipleOf(number, multiple) {
        return number % multiple === 0;
    }

    includesNumber(number, includedNumber) {
        return number.toString().includes(includedNumber);
    }
}

module.exports = FizzBuzz;
