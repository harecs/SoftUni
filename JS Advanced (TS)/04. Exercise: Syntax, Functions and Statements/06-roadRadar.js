function roadRadar(speed, area) {
    var Limit;
    (function (Limit) {
        Limit[Limit["residential"] = 20] = "residential";
        Limit[Limit["city"] = 50] = "city";
        Limit[Limit["interstate"] = 90] = "interstate";
        Limit[Limit["motorway"] = 130] = "motorway";
    })(Limit || (Limit = {}));
    ;
    speed = Number(speed);
    if (speed > Limit[area]) {
        var speedDifference = speed - Limit[area];
        var status_1 = getStatus(speedDifference);
        console.log("The speed is ".concat(speedDifference, " km/h faster than the allowed speed of ").concat(Limit[area], " - ").concat(status_1));
    }
    else {
        console.log("Driving ".concat(speed, " km/h in a ").concat(Limit[area], " zone"));
    }
    function getStatus(difference) {
        if (difference <= 20) {
            return 'speeding';
        }
        else if (difference <= 40) {
            return 'excessive speeding';
        }
        else {
            return 'reckless driving';
        }
    }
}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');
