function pieceOfPie(array, firstFlavor, secondFlavor) {
    const startIndex = array.indexOf(firstFlavor);
    const endIndex = array.indexOf(secondFlavor);
    return array.slice(startIndex, endIndex + 1);
}