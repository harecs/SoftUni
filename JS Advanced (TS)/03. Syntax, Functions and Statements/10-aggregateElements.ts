function aggregateElements(input: number[]) {
    aggregate(input, 0, (a: number, b: number) => a + b);
    aggregate(input, 0, (a: number, b: number) => a + 1 / b);
    aggregate(input, '', (a: number, b: number) => a + b);

    function aggregate(array: number[], initialValue: number | '', func: Function) {
        let value: number | string = initialValue;

        for (let i = 0; i < array.length; i++) {
            value = func(value, array[i]);
        }

        console.log(value);
    }
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);