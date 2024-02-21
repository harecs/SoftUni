interface CityInterface {
    name: string,
    population: number,
    treasury: number,
    taxRate: number,
    collectTaxes: Function,
    applyGrowth: Function,
    applyRecession: Function
}

function cityTaxes(name: string, population: number, treasury: number): CityInterface {
    return {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: function () { this.treasury += this.population * this.taxRate },
        applyGrowth: function (percentage) { this.population += this.population * (percentage / 100) },
        applyRecession: function (percentage) { this.treasury -= this.treasury * (percentage / 100) }
    };
}

const city = cityTaxes('Tortuga', 7000, 15000);
console.log(city);

const city2 = cityTaxes('Tortuga', 7000, 15000);
city2.collectTaxes();
console.log(city2.treasury);
city2.applyGrowth(5);
console.log(city2.population);