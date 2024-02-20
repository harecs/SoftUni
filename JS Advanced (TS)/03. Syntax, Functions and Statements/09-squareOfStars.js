function printSquareOfStars(size) {
    if (size === void 0) { size = 5; }
    var squareString = '';
    for (var i = 0; i < size; i++) {
        var row = '';
        for (var j = 0; j < size; j++) {
            row += '* ';
        }
        squareString += row.trim();
        squareString += '\n';
    }
    console.log(squareString);
}
printSquareOfStars(1);
printSquareOfStars(2);
printSquareOfStars(5);
printSquareOfStars(7);
printSquareOfStars();
