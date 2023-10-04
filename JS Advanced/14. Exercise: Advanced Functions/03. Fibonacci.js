function getFibonator() {
    let firstNumber = 0;
    let secondNumber = 1;

    return function () {
        const sum = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = sum;

        return firstNumber;
    }
}