function sameNumbers(number: number): void {
    let isSame: boolean = true;
    let sum: number = 0;

    let numberString: string = number.toString();

    numberString
        .split('')
        .forEach(char => {
            const digit: number = Number(char);

            if (char != numberString[0]) {
                isSame = false;
            }

            sum += digit;
        });

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);