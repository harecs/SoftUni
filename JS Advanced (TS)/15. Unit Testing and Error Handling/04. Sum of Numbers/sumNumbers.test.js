const { expect, assert } = require('chai');
const sum = require('./sumNumbers.js').sum;

describe('sum', () => {
    it('should return the sum of an array of numbers', () => {
        expect(sum([5, 5])).to.be.equal(10);
        expect(sum([-5, -5])).to.be.equal(-10);
    });

    it('should return 0 if the argument is empty array or empty string', () => {
        expect(sum([])).to.be.equal(0);
        expect(sum('')).to.be.equal(0);
    });

    it('should return the sum of an array of strings that can be parsed as Number', () => {
        expect(sum(['5', '5'])).to.be.equal(10);
        expect(sum(['-5', '-5'])).to.be.equal(-10);
    });

    it('should return NaN if the array contains values that cannot be parsed as Number', () => {
        assert.isNaN(sum([1, 2, { num: 3 }]));
        assert.isNaN(sum(['one', 'two', 'three']));
    });
})