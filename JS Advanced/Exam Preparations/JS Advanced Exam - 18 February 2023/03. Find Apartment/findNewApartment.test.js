const { expect } = require('chai');
const { findNewApartment } = require('./findNewApartment.js');

describe('findNewApartment', () => {
    describe('isGoodLocation', () => {
        it('should return go on home tour, when everything is ok', () => {
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!');
        });
        it('should return not suitable location, when not the cities wanted', () => {
            expect(findNewApartment.isGoodLocation('Belashtica', true)).to.equal('This location is not suitable for you.');
        });
        it('should return no public transport, when they do not have public transport', () => {
            expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal('There is no public transport in area.');
        });
        it('should throw error, when the first arg is not valid', () => {
            expect(() => findNewApartment.isGoodLocation(['Plovdiv', 'Varna'], false)).to.throw('Invalid input!');
        });
        it('should throw error, when the second arg is not valid', () => {
            expect(() => findNewApartment.isGoodLocation('Plovdiv', 'yes')).to.throw('Invalid input!');
        });
    });

    describe('isLargeEnough', () => {
        it('should return the result when everything is ok', () => {
            expect(findNewApartment.isLargeEnough([100, 200], 50)).to.equal('100, 200');
        });
        it('should return the result when everything is ok', () => {
            expect(findNewApartment.isLargeEnough([50, 200], 50)).to.equal('50, 200');
        });
        it('should return the result when everything the args are ok', () => {
            expect(findNewApartment.isLargeEnough([1, 200], 50)).to.equal('200');
        });
        it('should throw an error when the first arg is invalid', () => {
            expect(() => findNewApartment.isLargeEnough('100', 50)).to.throw('Invalid input!');
        });
        it('should throw an error when the first arg is empty array', () => {
            expect(() => findNewApartment.isLargeEnough([], 50)).to.throw('Invalid input!');
        });
        it('should throw an error when the second arg is invalid', () => {
            expect(() => findNewApartment.isLargeEnough([100, 200], 'at least fifty')).to.throw('Invalid input!');
        });
    });

    describe('isItAffordable', () => {
        it('should return that i can afford this home if everything is ok', () => {
            expect(findNewApartment.isItAffordable(500, 1000)).to.equal('You can afford this home!');
        });
        it('should return that i cannot afford this home if the budget is smaller than the price', () => {
            expect(findNewApartment.isItAffordable(9999, 1000)).to.equal("You don't have enough money for this house!");
        });
        it('should throw an error if the price is not a number', () => {
            expect(() => findNewApartment.isItAffordable('500', 1000)).to.throw('Invalid input!');
        });
        it('should throw an error if the budget is not a number', () => {
            expect(() => findNewApartment.isItAffordable(500, [1000])).to.throw('Invalid input!');
        });
        it('should throw an error if the price is negative number', () => {
            expect(() => findNewApartment.isItAffordable(-500, 1000)).to.throw('Invalid input!');
        });
        it('should throw an error if the budget is negative number', () => {
            expect(() => findNewApartment.isItAffordable(500, -1000)).to.throw('Invalid input!');
        });
    });
});