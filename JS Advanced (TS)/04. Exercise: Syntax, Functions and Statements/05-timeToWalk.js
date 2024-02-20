function calculateTimeToWalk(steps, strideInMeters, speedKmH) {
    var speedMs = speedKmH / 3.6;
    var distance = steps * strideInMeters;
    var neededSecondsWalking = distance / speedMs;
    var neededSecondsRest = Math.floor(distance / 500) * 60;
    var totalNeededSeconds = Math.round(neededSecondsWalking + neededSecondsRest);
    var myDate = new Date(1, 1, 1);
    myDate.setSeconds(totalNeededSeconds);
    var hours = myDate.getHours();
    var minutes = myDate.getMinutes();
    var seconds = myDate.getSeconds();
    console.log("".concat(formatTimePart(hours), ":").concat(formatTimePart(minutes), ":").concat(formatTimePart(seconds)));
    function formatTimePart(part) {
        var timePartString = part.toString();
        var formattedTimePart = timePartString.length == 1
            ? '0' + timePartString
            : timePartString;
        return formattedTimePart;
    }
}
calculateTimeToWalk(4000, 0.60, 5);
calculateTimeToWalk(2564, 0.70, 5.5);
