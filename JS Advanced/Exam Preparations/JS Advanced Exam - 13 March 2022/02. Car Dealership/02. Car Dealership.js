class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        const isValidModel = typeof model == 'string' && model !== '';
        const isValidHorsePower = typeof horsepower == 'number' && horsepower >= 0;
        const isPriceValid = typeof price == 'number' && price >= 0;
        const isMileageValid = typeof mileage == 'number' && mileage >= 0;

        if (!isValidModel || !isValidHorsePower || !isPriceValid || !isMileageValid) {
            throw new Error('Invalid input!');
        }

        const car = { model, horsepower, price, mileage };
        this.availableCars.push(car);

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        const car = this.availableCars.find(x => x.model === model);

        if (!car) {
            throw new Error(`${model} was not found!`);
        }

        let soldPrice = 0;

        if (car.mileage <= desiredMileage) {
            soldPrice = car.price
        } else if (car.mileage - desiredMileage <= 40000) {
            soldPrice = car.price * 0.95;
        } else if (car.mileage - desiredMileage > 40000) {
            soldPrice = car.price * 0.90;
        }

        this.availableCars.filter(x => x.model !== model);
        this.soldCars.push({
            model: car.model,
            horsepower: car.horsepower,
            soldPrice: soldPrice
        });

        this.totalIncome += soldPrice;
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    currentCar() {
        if (this.availableCars.length == 0) {
            return 'There are no available cars';
        }

        let output = '-Available cars:\n';

        this.availableCars.forEach(car => {
            output += `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$\n`;
        });

        return output.trim();
    }

    salesReport(criteria) {
        let sortedSoldCars = this.soldCars.slice();

        switch (criteria) {
            case 'horsepower': sortedSoldCars.sort((a, b) => b.horsepower - a.horsepower); break;
            case 'model': sortedSoldCars.sort((a, b) => a.model.localeCompare(b.model)); break;
            default: throw new Error('Invalid criteria!');
        }

        let output = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`;
        output += `-${sortedSoldCars.length} cars sold:\n`;

        sortedSoldCars.forEach(car => {
            output += `---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$\n`;
        });

        return output.trim();
    }
}