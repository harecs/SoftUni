function aggregateElements(input) {
    aggregate(input, 0, (a, b) => a + b);
    aggregate(input, 0, (a, b) => a + 1 / b);
    aggregate(input, '', (a, b) => a + b);
    
    function aggregate(array, initialValue, func) {
        let value = initialValue;

        for (let i = 0; i < array.length; i++) {
            value = func(value, array[i]);
        }

        console.log(value);
    }
}