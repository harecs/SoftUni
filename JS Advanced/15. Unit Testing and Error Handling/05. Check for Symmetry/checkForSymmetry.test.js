const { expect, assert, should } = require('chai');
const isSymmetric = require('./checkForSymmetry.js').isSymmetric;


describe('isSymmetric', () => {
    it('should return true if the array argument is symmetric and has even length', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('should return true if the array argument is symmetric and has odd length', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it('should return true if the array argument is a matrix', () => {
        expect(isSymmetric([[1], [2], [1]])).to.be.true;
    });

    it('should return true if the array argument has only 1 element', () => {
        expect(isSymmetric([12])).to.be.true;
    });

    it('should return true if the array argument is empty', () => {
        expect(isSymmetric([])).to.be.true;
    });

    it('should return false if the argument is not an array', () => {
        expect(isSymmetric({ key: 'value', value: 'key' })).to.be.false;
        expect(isSymmetric('DAD')).to.be.false;
        expect(isSymmetric(1221)).to.be.false;
        expect(isSymmetric(true)).to.be.false;
        expect(isSymmetric(NaN)).to.be.false;
    });

    it('should return false if there is no argument', () => {
        expect(isSymmetric()).to.be.false;
    });
});