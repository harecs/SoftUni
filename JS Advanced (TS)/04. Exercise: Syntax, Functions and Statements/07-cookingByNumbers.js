function cook(numberAsString) {
    var operations = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        operations[_i - 1] = arguments[_i];
    }
    var number = Number(numberAsString);
    var operationObj = {
        chop: function (num) { return num / 2; },
        dice: function (num) { return Math.sqrt(num); },
        spice: function (num) { return num + 1; },
        bake: function (num) { return num * 3; },
        fillet: function (num) { return num * 0.8; }
    };
    operations.forEach(function (operation) {
        number = operationObj[operation](number);
        console.log(number);
    });
}
cook('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
