function getSumNToM(n, m) {
    const firstNum = Number(n);
    const secondNum = Number(m);
    let result = 0;

    for (let i = firstNum; i <= secondNum; i++) {
        result += i;
    }

    return result;
}