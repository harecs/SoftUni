function logStringInfo(firstString, secondString, thirdString) {
    var lengthSum;
    var averageLength;
    lengthSum = firstString.length + secondString.length + thirdString.length;
    averageLength = Math.floor(lengthSum / 3);
    console.log(lengthSum);
    console.log(averageLength);
}
logStringInfo('chocolate', 'ice cream', 'cake');
logStringInfo('pasta', '5', '22.3');
