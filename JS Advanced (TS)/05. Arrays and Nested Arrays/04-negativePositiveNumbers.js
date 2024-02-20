function arrangeArray(input) {
    var result = [];
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var number = input_1[_i];
        number >= 0
            ? result.push(number)
            : result.unshift(number);
    }
    console.log(result.join('\n'));
}
arrangeArray([7, -2, 8, 9]);
arrangeArray([3, -2, 0, -1]);
