function calculateTimeToWalk(steps, strideInMeters, speedKmH) {
    const speedMs = speedKmH / 3.6;
    const distance = steps * strideInMeters;
    const neededSecondsWalking = distance / speedMs;
    const neededSecondsRest = Math.floor(distance / 500) * 60;
    const totalNeededSeconds = Math.round(neededSecondsWalking + neededSecondsRest);

    let myDate = new Date(1, 1, 1);
    myDate.setSeconds(totalNeededSeconds);

    const hours = myDate.getHours();
    const minutes = myDate.getMinutes();
    const seconds = myDate.getSeconds();

    console.log(`${formatTimePart(hours)}:${formatTimePart(minutes)}:${formatTimePart(seconds)}`);

    function formatTimePart(part) {
        const timePartString = part.toString();

        const formattedTimePart =
            timePartString.length == 1
                ? '0' + timePartString
                : timePartString;

        return formattedTimePart;
    }
}