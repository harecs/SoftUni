function sumFirstLast(inputArray) {
    const numbers = inputArray.map(x => Number(x));
    return numbers[0] + numbers[numbers.length - 1];
}