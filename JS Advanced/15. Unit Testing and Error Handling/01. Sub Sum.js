function subSum(array, startIndexInput, endIndexInput) {
    if (!Array.isArray(array)) {
        return NaN;
    }

    const startIndex = startIndexInput < 0 ? 0 : startIndexInput;
    const endIndex = endIndexInput > array.length - 1 ? array.length - 1 : endIndexInput;

    return array.map(Number)
        .slice(startIndex, endIndex + 1)
        .reduce((sum, num) => sum += num, 0);
}