function townPopulation(inputArray: string[]): void {
    const towns: object = {};

    for (const line of inputArray) {
        const splitLine = line.split(' <-> ');
        const townName: string = splitLine[0];
        const population: number = Number(splitLine[1]);

        if (towns[townName]) {
            towns[townName] += population;
        } else {
            towns[townName] = population;
        }
    }

    for (const key in towns) {
        console.log(`${key} : ${towns[key]}`);
    }
}

townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);