function findBiggestElement(matrix: number[][]): number {
    let biggestNumber: number = Number.MIN_VALUE;

    for (const array of matrix) {
        const arrayBiggestNumber: number = Math.max(...array);

        if (arrayBiggestNumber > biggestNumber) {
            biggestNumber = arrayBiggestNumber;
        }
    }

    return biggestNumber;
}

console.log(findBiggestElement([
    [20, 50, 10],
    [8, 33, 145]
]));
console.log(findBiggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]));