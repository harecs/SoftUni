type Area = 'residential' | 'city' | 'interstate' | 'motorway';

function roadRadar(speed: number | string, area: Area): void {
    enum Limit {
        residential = 20,
        city = 50,
        interstate = 90,
        motorway = 130
    };

    speed = Number(speed);


    if (speed > Limit[area]) {
        const speedDifference: number = speed - Limit[area];
        const status: string = getStatus(speedDifference);

        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${Limit[area]} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${Limit[area]} zone`);
    }

    function getStatus(difference: number): string {
        if (difference <= 20) {
            return 'speeding';
        } else if (difference <= 40) {
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');