type Matrix = number[][];

function checkMatrix(matrix: Matrix) {
    for (let i = 0; i < matrix.length - 1; i++) {
        const firstRowSum: number = matrix[i].reduce((acc: number, x: number) => acc + x, 0);
        const secondRowSum: number = matrix[i + 1].reduce((acc: number, x: number) => acc + x, 0);

        const firstColSum: number = matrix.reduce((acc: number, x: number[]) => acc + x[i], 0);
        const secondColSum: number = matrix.reduce((acc: number, x: number[]) => acc + x[i + 1], 0);

        if (firstRowSum != secondRowSum || firstColSum != secondColSum) {
            return false;
        }
    }

    return true;
}

console.log(checkMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));
console.log(checkMatrix([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log(checkMatrix([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));
