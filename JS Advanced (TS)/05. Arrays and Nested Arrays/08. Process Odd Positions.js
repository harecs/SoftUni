function processOddPositions(input) {
    const result = [];

    input.forEach((x, i) => i % 2 == 1 ? result.push(x * 2) : null);

    return result.reverse().join(' ');
}