const { expect } = require('chai');
const { lookupChar } = require('./charLookUp.js');

describe('lookupChar', () => {
    it('should return the char at the wanted index', () => {
        expect(lookupChar('word', 2)).to.be.equal('r');
    });

    it('should return undefined if the first argument is not a string', () => {
        expect(lookupChar(['w', 'o', 'r', 'd'], 2)).to.be.undefined;
    });

    it('should return undefined if the second argument is not a number', () => {
        expect(lookupChar('word', '2')).to.be.undefined;
    });

    it('should return undefined if the second argument is a floating number', () => {
        expect(lookupChar('word', 3.14)).to.be.undefined;
    });

    it('should return "Incorrect index" if the index argument is outside of the bounds', () => {
        expect(lookupChar('word', 999)).to.be.equal('Incorrect index');
    });

    it('should return "Incorrect index" if the index argument is a negative number', () => {
        expect(lookupChar('word', -1)).to.be.equal('Incorrect index');
    });
});