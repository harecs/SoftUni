type Operator = '+' | '-' | '*' | '/' | '%' | '**';

function calculate(firstNum: number, secondNum: number, operator: Operator) {
    let result: number;

    switch (operator) {
        case '+': result = firstNum + secondNum; break;
        case '-': result = firstNum - secondNum; break;
        case '*': result = firstNum * secondNum; break;
        case '/': result = firstNum / secondNum; break;
        case '%': result = firstNum % secondNum; break;
        case '**': result = firstNum ** secondNum; break;
    }

    console.log(result);
}

calculate(5, 6, '+');
calculate(3, 5.5, '*');