function carFactory(orderObj) {
    const model = orderObj.model;
    const power = orderObj.power;
    const color = orderObj.color;
    const carriage = orderObj.carriage;
    let wheelsize = orderObj.wheelsize;

    const engineMapper = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 }
    }

    const carriageMapper = {
        hatchback: { type: 'hatchback', color },
        coupe: { type: 'coupe', color }
    }

    if (wheelsize % 2 == 0) {
        wheelsize -= 1;
    }

    const car = {};

    car.model = model;

    if (power <= 90) {
        car.engine = engineMapper.small;
    } else if (power <= 120) {
        car.engine = engineMapper.normal;
    } else {
        car.engine = engineMapper.monster;
    }

    car.carriage = carriageMapper[carriage];

    car.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];

    return car;
}