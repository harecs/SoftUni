function cityTaxes(name, population, treasury) {
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