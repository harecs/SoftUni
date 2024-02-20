function getBiggerHalf(input) {
    input.sort((a, b) => a - b);
    return input.slice(Math.floor(input.length / 2));
}