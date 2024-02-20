const { flowerShop } = require('./flowerShop.js');
const { expect } = require('chai');

describe('flowerShop', () => {
    describe('calcPriceOfFlowers', () => {
        it('should return the expected output', () => {
            expect(flowerShop.calcPriceOfFlowers('Purple', 3, 2)).to.equal('You need $6.00 to buy Purple!');
        });
        it('should throw an Error when is supplied with invalid first argument', () => {
            expect(() => flowerShop.calcPriceOfFlowers({ flower: 'Purple' }, 3, 2)).to.throw('Invalid input!');
        });
        it('should throw an Error when is supplied with invalid second argument', () => {
            expect(() => flowerShop.calcPriceOfFlowers('Purple', 'three', 2)).to.throw('Invalid input!');
        });
        it('should throw an Error when is supplied with invalid third argument', () => {
            expect(() => flowerShop.calcPriceOfFlowers('Purple', 3, [1, 1])).to.throw('Invalid input!');
        });
        it('should throw an Error when is supplied with number that is not an Integer as first argument', () => {
            expect(() => flowerShop.calcPriceOfFlowers('Purple', 3.14, 2)).to.throw('Invalid input!');
        });
        it('should throw an Error when is supplied with number that is not an Integer as second argument', () => {
            expect(() => flowerShop.calcPriceOfFlowers('Purple', 3, 3.14)).to.throw('Invalid input!');
        });
    });

    describe('checkFlowersAvailable', () => {
        it('should return the expected output when the flower is there', () => {
            expect(flowerShop.checkFlowersAvailable('Purple', ['Purple', 'Lime', 'Kiwi'])).to.equal('The Purple are available!');
        });
        it('should return the expected output when the flower is not available there', () => {
            expect(flowerShop.checkFlowersAvailable('Orange Rose', ['Purple', 'Lime', 'Kiwi'])).to.equal('The Orange Rose are sold! You need to purchase more!');
        });
        // maybe i need more test here
    });

    describe('sellFlowers', () => {
        it('should return the expected output when everything is ok', () => {
            expect(flowerShop.sellFlowers(['Purple', 'Lime', 'Kiwi'], 1)).to.equal('Purple / Kiwi');
        });
        it('should return the expected output when the second argument is zero', () => {
            expect(flowerShop.sellFlowers(['Purple', 'Lime', 'Kiwi'], 0)).to.equal('Lime / Kiwi');
        });
        it('should throw an Error when the first argument is not an Array', () => {
            expect(() => flowerShop.sellFlowers({ 'Purple': 2, 'Lime': 5 }, 1)).to.throw('Invalid input!');
        });
        it('should throw an Error when the second argument is not an Number', () => {
            expect(() => flowerShop.sellFlowers(['Purple', 'Lime', 'Kiwi'], 'zero')).to.throw('Invalid input!');
        });
        it('should throw an Error when the second argument is not an Integer', () => {
            expect(() => flowerShop.sellFlowers(['Purple', 'Lime', 'Kiwi'], 3.14)).to.throw('Invalid input!');
        });
        it('should throw an Error when the second argument is below zero', () => {
            expect(() => flowerShop.sellFlowers(['Purple', 'Lime', 'Kiwi'], -1)).to.throw('Invalid input!');
        });
    })
});