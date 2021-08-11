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
    isFizz(number) {
        return this.isMultipleOf3(number) || this.includesNumber3(number);
    }




    isBuzz(number) {
        return this.isMultipleOf5(number) || this.includesNumber5(number);
    }



    isMultipleOf3(number) {
        return number % 3 === 0;
    }

    isMultipleOf5(number) {
        return number % 5 === 0;
    }
    includesNumber3(number) {
        return number.toString().includes('3');
    }
    includesNumber5(number) {
        return number.toString().includes('5');
    }
}

module.exports = FizzBuzz;
