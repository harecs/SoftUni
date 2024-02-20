function processOddPositions(input: number[]): string {
    const result: number[] = [];

    input.forEach((x, i) => i % 2 == 1 ? result.push(x * 2) : null);

    return result.reverse().join(' ');
}

console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));
