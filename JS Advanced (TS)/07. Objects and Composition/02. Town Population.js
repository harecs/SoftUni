function townPopulation(inputArray) {
    const towns = {};

    for (const line of inputArray) {
        let [townName, population] = line.split(' <-> ');
        population = Number(population);

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