function arrangeArray(input: Array<number>): void {
    const result: Array<number> = [];

    for (const number of input) {
        number >= 0
            ? result.push(number)
            : result.unshift(number);
    }

    console.log(result.join('\n'));
}

arrangeArray([7, -2, 8, 9]);
arrangeArray([3, -2, 0, -1]);