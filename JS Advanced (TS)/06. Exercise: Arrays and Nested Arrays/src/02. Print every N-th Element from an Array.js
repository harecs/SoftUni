function printElements(array, nStep) {
    const result = [];

    for (let i = 0; i < array.length; i += nStep) {
        result.push(array[i]);
    }

    return result;
}