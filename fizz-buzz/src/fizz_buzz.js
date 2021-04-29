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
                numbers.push('Buzz');
            } else {

                numbers.push(number.toString());

            }
        }
        return numbers;
    }



    isFizz(number) {
        return this.isMultipleOf(number, 3) || this.contain3(number);
    }
    isBuzz(number) {
        return this.isMultipleOf(number, 5) || this.contain5(number);
    }
    isFizzBuzz(number) {
        return this.isFizz(number) && this.isBuzz(number);
    }
    isMultipleOf(number, multipleOf) {
        return number % multipleOf === 0;
    }
    contain3(number) {
        return number.toString().includes('3');
    }
    contain5(number) {
        return number.toString().includes('5');
    }
}

module.exports = FizzBuzz;
