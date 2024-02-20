const onlineStore = require('./script.js');
const { expect } = require('chai');

describe('onlineStore', () => {
    describe('isProductAvailable', () => {
        it('should return the expected output when everything is ok', () => {
            expect(onlineStore.isProductAvailable('charger', 5)).to.equal('Great! charger is available for purchase.');
        });
        it('should return the expected output when everything is ok (the second arg is floating number)', () => {
            expect(onlineStore.isProductAvailable('charger', 3.14)).to.equal('Great! charger is available for purchase.');
        });
        it('should return the expected output when there arent any of the product', () => {
            expect(onlineStore.isProductAvailable('charger', 0)).to.equal('Sorry, charger is currently out of stock.');
        });
        it('should return the expected output when there arent any of the product (negative number)', () => {
            expect(onlineStore.isProductAvailable('charger', -3)).to.equal('Sorry, charger is currently out of stock.');
        });
        it('should throw an Error when the first argument is not a string', () => {
            expect(() => onlineStore.isProductAvailable(['charger'], 5)).to.throw('Invalid input.');
        });
        it('should throw an Error when the second argument is not a number', () => {
            expect(() => onlineStore.isProductAvailable('charger', { qty: 5 })).to.throw('Invalid input.');
        });
    });

    describe('canAffordProduct', () => {
        it('should return the expected output when everything is ok (i have the needed money)', () => {
            expect(onlineStore.canAffordProduct(1260, 1300)).to.equal('Product purchased. Your remaining balance is $40.');
        });
        it('should return the expected output when everything is ok (i have exactly the needed money)', () => {
            expect(onlineStore.canAffordProduct(1260, 1260)).to.equal('Product purchased. Your remaining balance is $0.');
        });
        it('should return the expected output when everything is ok (i have the needed money) [negative]', () => {
            expect(onlineStore.canAffordProduct(1260.3, 1300.3)).to.equal('Product purchased. Your remaining balance is $40.');
        });
        it('should return the expected output when everything is ok (i do not have the needed money)', () => {
            expect(onlineStore.canAffordProduct(1260, 10)).to.equal("You don't have sufficient funds to buy this product.");
        });
        it('should throw an Error when the first argument is not of type Number', () => {
            expect(() => onlineStore.canAffordProduct('one hundred and two dollars', 10)).to.throw('Invalid input.');
        });
        it('should throw an Error when the second argument is not of type Number', () => {
            expect(() => onlineStore.canAffordProduct(20, [10, 10])).to.throw('Invalid input.');
        });
    });

    describe('getRecommendedProducts', () => {
        it('should return the expected output when everything is ok (returns the recommended products)', () => {
            expect(onlineStore.getRecommendedProducts([{ name: 15, category: 'Apple iPhone' }, { name: 13, category: 'Apple iPhone' }], 'Apple iPhone')).to.equal('Recommended products in the Apple iPhone category: 15, 13');
        });
        it('should return the expected output when everything is ok (returns the recommended products, different categories)', () => {
            expect(onlineStore.getRecommendedProducts([{ name: 15, category: 'Apple iPhone' }, { name: 'Air 5', category: 'Apple iPad' }], 'Apple iPhone')).to.equal('Recommended products in the Apple iPhone category: 15');
        });
        it('should return the expected output when everything is ok (returns that there are not recommended things)', () => {
            expect(onlineStore.getRecommendedProducts([{ name: 15, category: 'Apple iPhone' }, { name: 13, category: 'Apple iPhone' }], 'Samsung')).to.equal('Sorry, we currently have no recommended products in the Samsung category.');
        });
        it('should throw an Error when the first argument is not of type Array', () => {
            expect(() => onlineStore.getRecommendedProducts('iPhone iPad', 'iPad').to.throw('Invalid input.'));
        });
        it('should throw an Error when the second argument is not of type String', () => {
            expect(() => onlineStore.getRecommendedProducts([{ name: 15, category: 'Apple iPhone' }, { name: 13, category: 'Apple iPhone' }], 15).to.throw('Invalid input.'));
        });
    });
});