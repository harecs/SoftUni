function lastKNumbersSequence(n, k) {
    const result = [1];

    for (let i = 0; i < n - 1; i++) {
        let start;
        let sequence;


        if (result.length <= k) {
            start = 0;
            sequence = result.slice(0);
        } else {
            start = result.length - k;
            sequence = result.slice(start);
        }


        const accumulatorFunction = (acc, value) => acc + value;
        const number = sequence.reduce(accumulatorFunction, 0);

        result.push(number)
    }

    return result;
}