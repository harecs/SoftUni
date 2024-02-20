function sameNumbers(number) {
    var isSame = true;
    var sum = 0;
    var numberString = number.toString();
    numberString
        .split('')
        .forEach(function (char) {
        var digit = Number(char);
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
