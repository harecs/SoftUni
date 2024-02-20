function findBiggestElement(matrix) {
    let biggestNumber = Number.MIN_SAFE_INTEGER;

    for (const array of matrix) {
        const arrayBiggestNumber = Math.max(...array);

        if (arrayBiggestNumber > biggestNumber) {
            biggestNumber = arrayBiggestNumber;
        }
    }

    return biggestNumber;
}