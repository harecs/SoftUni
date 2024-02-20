const { expect } = require('chai');
const { isOddOrEven } = require('./isOddOrEven.js');

describe('isOddOrEven', () => {
    it('should return "even" when the argument is a string with even length', () => {
        expect(isOddOrEven('abcd')).to.be.equal('even');
    });

    it('should return "odd" when the argument is a string with odd length', () => {
        expect(isOddOrEven('abc')).to.be.equal('odd');
    });

    it('should return undefined when the argument is an array', () => {
        expect(isOddOrEven(['abcd'])).to.be.undefined;
    });

    it('should return undefined when the argument is a number', () => {
        expect(isOddOrEven(1234)).to.be.undefined;
    });

    it('should return undefined when the argument is an object', () => {
        expect(isOddOrEven({ key: 'value' })).to.be.undefined;
    });

    it('should return the result only for the first argument', () => {
        expect(isOddOrEven('abcd', 'abc')).to.be.equal('even');
    });
});