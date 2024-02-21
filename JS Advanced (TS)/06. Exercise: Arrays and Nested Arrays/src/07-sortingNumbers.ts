function sortNumbers(numbers: number[]): number[] {
    const numbersCount: number = numbers.length;
    numbers.sort((a, b) => a - b);
    const result: number[] = [];

    for (let i = 0; i < numbersCount; i++) {
        result.push(i % 2 == 0 ? numbers.shift() : numbers.pop());
    }

    return result;
}

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
console.log(sortNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));