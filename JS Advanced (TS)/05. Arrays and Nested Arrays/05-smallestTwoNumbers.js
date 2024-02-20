function printSmallestTwoNumbers(input) {
    input.sort(function (a, b) { return a - b; });
    console.log(input[0] + ' ' + input[1]);
}
printSmallestTwoNumbers([30, 15, 50, 5]);
printSmallestTwoNumbers([3, 0, 10, 4, 7, 3]);
