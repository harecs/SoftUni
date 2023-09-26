function subtract() {
    const firstNum = Number(document.querySelector('#firstNumber').value);
    const secondNum = Number(document.querySelector('#secondNumber').value);

    document.querySelector('#result').textContent = firstNum - secondNum;
}