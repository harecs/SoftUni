function calculateCircleArea(input) {
    var inputType = typeof input;
    if (inputType == 'number') {
        var area = Math.PI * Math.pow(input, 2);
        console.log(area.toFixed(2));
    }
    else {
        console.log("We can not calculate the circle area, because we receive a ".concat(inputType, "."));
    }
}
calculateCircleArea(5);
calculateCircleArea('name');
