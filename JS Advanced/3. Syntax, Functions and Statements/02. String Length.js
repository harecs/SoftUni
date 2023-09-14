function logStringInfo(firstString, secondString, thirdString) {
    let lengthSum;
    let averageLength;

    lengthSum = firstString.length + secondString.length + thirdString.length;
    averageLength = Math.floor(lengthSum / 3);

    console.log(lengthSum);
    console.log(averageLength);
}