function findBiggestElement(matrix) {
    var biggestNumber = Number.MIN_VALUE;
    for (var _i = 0, matrix_1 = matrix; _i < matrix_1.length; _i++) {
        var array = matrix_1[_i];
        var arrayBiggestNumber = Math.max.apply(Math, array);
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
