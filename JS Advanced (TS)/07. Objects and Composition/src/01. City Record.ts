interface CityRecordInterface {
    name: string,
    population: number,
    treasury: number
}

function cityRecord(name: string, population: number, treasury: number): CityRecordInterface {
    const record: CityRecordInterface = { name, population, treasury };
    return record;
}

console.log(cityRecord('Tortuga', 7000, 15000));
console.log(cityRecord('Santo Domingo', 12000, 23500));
