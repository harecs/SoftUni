function getSumNToM(n: string, m: string) {
    const firstNum: number = Number(n);
    const secondNum: number = Number(m);
    let result: number = 0;

    for (let i = firstNum; i <= secondNum; i++) {
        result += i;
    }

    return result;
}

console.log(getSumNToM('1', '5'));
console.log(getSumNToM('-8', '20'));