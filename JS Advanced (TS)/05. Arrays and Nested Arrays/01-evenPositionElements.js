function printEvenPositionElements(array) {
    var resultArray = [];
    for (var i = 0; i < array.length; i += 2) {
        resultArray.push(array[i]);
    }
    console.log(resultArray.join(' '));
}
printEvenPositionElements(['20', '30', '40', '50', '60']);
printEvenPositionElements(['5', '10']);
