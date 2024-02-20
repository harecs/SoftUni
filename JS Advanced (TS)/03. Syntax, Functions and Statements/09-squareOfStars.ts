function printSquareOfStars(size?: number) {
    let squareString: string = '';

    if (!size) {
        size = 5;
    }

    for (let i = 0; i < size; i++) {
        let row: string = '';

        for (let j = 0; j < size; j++) {
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