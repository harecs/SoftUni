const { rentCar } = require('./rentCar.js');
const { expect } = require('chai');

describe('rentCar', () => {
    describe('searchCar', () => {
        it('should return the result when everything is ok', () => {
            expect(rentCar.searchCar(['BMW', 'Tesla'], 'BMW')).to.equal('There is 1 car of model BMW in the catalog!');
        });
        it('should return the result when everything is ok and there is more than one car from the desired model', () => {
            expect(rentCar.searchCar(['BMW', 'Tesla', 'BMW'], 'BMW')).to.equal('There is 2 car of model BMW in the catalog!');
        });
        it('should throw an error when the first arg is not an Array', () => {
            expect(() => rentCar.searchCar('BMW', 'BMW')).to.throw('Invalid input!');
        });
        it('should throw an error when the second arg is not a String', () => {
            expect(() => rentCar.searchCar(['BMW', 'Tesla'], ['BMW'])).to.throw('Invalid input!');
        });
        it('should throw an error when there is not found model', () => {
            expect(() => rentCar.searchCar(['BMW', 'Tesla'], 'VW')).to.throw('There are no such models in the catalog!');
        });
    });

    describe('calculatePriceOfCar', () => {
        it('should return the result when everything is ok', () => {
            expect(rentCar.calculatePriceOfCar('Mercedes', 2)).to.equal('You choose Mercedes and it will cost $100!');
        });
        it('should throw an error when the first arg is not a String', () => {
            expect(() => rentCar.calculatePriceOfCar({ 'Mercedes': 'AMG' }, 2)).to.throw('Invalid input!');
        });
        it('should throw an error when the second arg is not a Number', () => {
            expect(() => rentCar.calculatePriceOfCar('Mercedes', {})).to.throw('Invalid input!');
        });
        it('should throw an error when the second arg is not an Integer', () => {
            expect(() => rentCar.calculatePriceOfCar('Mercedes', 3.14)).to.throw('Invalid input!');
        });
        it('should throw an error when there is not found model', () => {
            expect(() => rentCar.calculatePriceOfCar('Mini', 3)).to.throw('No such model in the catalog!');
        });
    });

    describe('checkBudget', () => {
        it('should return the result when there are enough money', () => {
            expect(rentCar.checkBudget(20, 2, 50)).to.equal('You rent a car!');
        });
        it('should return the result when there are exactly the needed money', () => {
            expect(rentCar.checkBudget(20, 2, 40)).to.equal('You rent a car!');
        });
        it('should return the result when there are not enough money', () => {
            expect(rentCar.checkBudget(20, 2, 20)).to.equal('You need a bigger budget!');
        });
        it('should throw an error when the first arg is not a Number', () => {
            expect(() => rentCar.checkBudget('BMW', 2, 20)).to.throw('Invalid input!');
        });
        it('should throw an error when the first arg is not an Integer', () => {
            expect(() => rentCar.checkBudget(3.14, 2, 20)).to.throw('Invalid input!');
        });
        it('should throw an error when the second arg is not a Number', () => {
            expect(() => rentCar.checkBudget(20, '4', 20)).to.throw('Invalid input!');
        });
        it('should throw an error when the second arg is not an Integer', () => {
            expect(() => rentCar.checkBudget(20, 3.14, 20)).to.throw('Invalid input!');
        });
        it('should throw an error when the third arg is not a Number', () => {
            expect(() => rentCar.checkBudget(20, 2, [8])).to.throw('Invalid input!');
        });
        it('should throw an error when the third arg is not an Integer', () => {
            expect(() => rentCar.checkBudget(20, 3, 3.14)).to.throw('Invalid input!');
        });
    });
});