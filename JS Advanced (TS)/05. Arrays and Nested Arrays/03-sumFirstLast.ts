function sumFirstLast(inputArray: Array<string>): number {
    const numbers: Array<number> = inputArray.map(x => Number(x));
    return numbers[0] + numbers[numbers.length - 1];
}

console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));