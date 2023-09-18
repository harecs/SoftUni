function arrangeArray(input) {
    const result = [];

    for (const number of input) {
        number >= 0
            ? result.push(number)
            : result.unshift(number);
    }

    console.log(result.join('\n'));
}