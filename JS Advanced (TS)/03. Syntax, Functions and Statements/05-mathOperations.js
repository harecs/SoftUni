function calculate(firstNum, secondNum, operator) {
    var result;
    switch (operator) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        case '/':
            result = firstNum / secondNum;
            break;
        case '%':
            result = firstNum % secondNum;
            break;
        case '**':
            result = Math.pow(firstNum, secondNum);
            break;
    }
    console.log(result);
}
calculate(5, 6, '+');
calculate(3, 5.5, '*');
