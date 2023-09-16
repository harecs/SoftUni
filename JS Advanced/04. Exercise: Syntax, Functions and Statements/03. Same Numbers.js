function sameNumbers(number) {
    let isSame = true;
    let sum = 0;

    let numberString = number.toString();

    numberString
        .split('')
        .forEach(char => {
            const digit = Number(char);
            
            if (char != numberString[0]) {
                isSame = false;
            }

            sum += digit;
        });

    console.log(isSame);
    console.log(sum);
}