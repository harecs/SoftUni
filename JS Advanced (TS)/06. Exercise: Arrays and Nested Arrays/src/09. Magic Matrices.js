function checkMatrix(matrix) {
    for (let i = 0; i < matrix.length - 1; i++) {
        const firstRowSum = matrix[i].reduce((acc, x) => acc + x, 0);
        const secondRowSum = matrix[i + 1].reduce((acc, x) => acc + x, 0);

        const firstColSum = matrix.reduce((acc, x) => acc + x[i], 0);
        const secondColSum = matrix.reduce((acc, x) => acc + x[i + 1], 0);

        if (firstRowSum != secondRowSum || firstColSum != secondColSum) {
            return false;
        }
    }

    return true;
}