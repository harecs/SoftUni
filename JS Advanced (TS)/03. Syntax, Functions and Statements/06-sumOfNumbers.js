function getSumNToM(n, m) {
    var firstNum = Number(n);
    var secondNum = Number(m);
    var result = 0;
    for (var i = firstNum; i <= secondNum; i++) {
        result += i;
    }
    return result;
}
console.log(getSumNToM('1', '5'));
console.log(getSumNToM('-8', '20'));
