function printSmallestTwoNumbers(input) {
    input.sort((a, b) => a - b);
    console.log(input[0] + ' ' + input[1]);
}