function lastKNumbersSequence(n, k) {
    var result = [1];
    for (var i = 0; i < n - 1; i++) {
        var start = void 0;
        var sequence = void 0;
        if (result.length <= k) {
            start = 0;
            sequence = result.slice(0);
        }
        else {
            start = result.length - k;
            sequence = result.slice(start);
        }
        var accumulatorFunction = function (acc, value) { return acc + value; };
        var number = sequence.reduce(accumulatorFunction, 0);
        result.push(number);
    }
    return result;
}
console.log(lastKNumbersSequence(6, 3));
console.log(lastKNumbersSequence(8, 2));
