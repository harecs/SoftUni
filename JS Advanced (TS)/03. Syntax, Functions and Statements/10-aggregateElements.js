function aggregateElements(input) {
    aggregate(input, 0, function (a, b) { return a + b; });
    aggregate(input, 0, function (a, b) { return a + 1 / b; });
    aggregate(input, '', function (a, b) { return a + b; });
    function aggregate(array, initialValue, func) {
        var value = initialValue;
        for (var i = 0; i < array.length; i++) {
            value = func(value, array[i]);
        }
        console.log(value);
    }
}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
