function roadRadar(speed, area) {
    speed = Number(speed);
    
    const limit = {
        residential: 20,
        city: 50,
        interstate: 90,
        motorway: 130
    };

    if (speed > limit[area]) {
        const speedDifference = speed - limit[area];
        const status = getStatus(speedDifference);

        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${limit[area]} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${limit[area]} zone`);
    }

    function getStatus(difference) {
        if (difference <= 20) {
            return 'speeding';
        } else if (difference <= 40) {
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }
}