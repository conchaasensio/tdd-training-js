class FizzBuzz {
    returnNumbers() {
        let numbers = [];
        for (let index = 0; index < 100; index ++) {
            const number = index + 1;

            if (this.isFizzBuzz(number) ) {
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

    isBuzz(number) {
        return number % 5 === 0 || number.toString().includes('5');
    }

    isFizz(number) {
        return number % 3 === 0 || number.toString().includes('3');
    }
}

module.exports = FizzBuzz;
