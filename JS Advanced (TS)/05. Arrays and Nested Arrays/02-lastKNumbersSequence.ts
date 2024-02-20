function lastKNumbersSequence(n: number, k: number): number[] {
    const result: number[] = [1];

    for (let i = 0; i < n - 1; i++) {
        let start: number;
        let sequence: number[];

        if (result.length <= k) {
            start = 0;
            sequence = result.slice(0);
        } else {
            start = result.length - k;
            sequence = result.slice(start);
        }

        const accumulatorFunction = (acc: any, value: number): number => acc + value;
        const number: number = sequence.reduce(accumulatorFunction, 0);

        result.push(number)
    }

    return result;
}

console.log(lastKNumbersSequence(6, 3));
console.log(lastKNumbersSequence(8, 2));