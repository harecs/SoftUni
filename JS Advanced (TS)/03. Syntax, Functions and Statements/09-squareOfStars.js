function printSquareOfStars(size) {
    var squareString = '';
    if (!size) {
        size = 5;
    }
    for (var i = 0; i < size; i++) {
        var row = '';
        for (var j = 0; j < size; j++) {
            row += '* ';
        }
        squareString += row.trim();
        squareString += '\n';
    }
    console.log(squareString.trim());
}
printSquareOfStars(1);
printSquareOfStars(2);
printSquareOfStars(5);
printSquareOfStars(7);
printSquareOfStars();
