function getBiggerHalf(input) {
    input.sort(function (a, b) { return a - b; });
    return input.slice(Math.floor(input.length / 2));
}
console.log(getBiggerHalf([4, 7, 2, 5]));
console.log(getBiggerHalf([3, 19, 14, 7, 2, 19, 6]));
