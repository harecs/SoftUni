function calculateTimeToWalk(steps: number, strideInMeters: number, speedKmH: number): void {
    const speedMs: number = speedKmH / 3.6;
    const distance: number = steps * strideInMeters;
    const neededSecondsWalking: number = distance / speedMs;
    const neededSecondsRest: number = Math.floor(distance / 500) * 60;
    const totalNeededSeconds: number = Math.round(neededSecondsWalking + neededSecondsRest);

    let myDate: Date = new Date(1, 1, 1);
    myDate.setSeconds(totalNeededSeconds);

    const hours: number = myDate.getHours();
    const minutes: number = myDate.getMinutes();
    const seconds: number = myDate.getSeconds();

    console.log(`${formatTimePart(hours)}:${formatTimePart(minutes)}:${formatTimePart(seconds)}`);

    function formatTimePart(part: number): string {
        const timePartString: string = part.toString();

        const formattedTimePart: string =
            timePartString.length == 1
                ? '0' + timePartString
                : timePartString;

        return formattedTimePart;
    }
}

calculateTimeToWalk(4000, 0.60, 5);
calculateTimeToWalk(2564, 0.70, 5.5);