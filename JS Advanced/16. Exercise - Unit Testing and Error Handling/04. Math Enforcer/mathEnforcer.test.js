const { expect } = require('chai');
const { mathEnforcer } = require('./mathEnforcer.js');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('should return the sum when the argument is a positive number', () => {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        });

        it('should return the sum when the argument is a negative number', () => {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });

        it('should return the sum when the argument is a floating number', () => {
            expect(mathEnforcer.addFive(5.55)).to.be.closeTo(10.55, 0.01);
        });

        it('should return the sum when the argument is a negative floating number', () => {
            expect(mathEnforcer.addFive(-5.55)).to.be.closeTo(-0.55, 0.01);
        });

        it('should return NaN when the argument is NaN', () => {
            expect(mathEnforcer.addFive(NaN)).to.be.NaN;
        });

        it('should return undefined when the argument is a string', () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
        });

        it('should return undefined when the argument is an array', () => {
            expect(mathEnforcer.addFive([5])).to.be.undefined;
        });

        it('should return undefined when the argument is an object', () => {
            expect(mathEnforcer.addFive({ five: 5 })).to.be.undefined;
        });

        it('should return undefined when the argument is null', () => {
            expect(mathEnforcer.addFive(null)).to.be.undefined;
        });

        it('should return undefined when the argument is undefined', () => {
            expect(mathEnforcer.addFive(undefined)).to.be.undefined;
        });

        it('should return undefined when the argument is not present', () => {
            expect(mathEnforcer.addFive()).to.be.undefined;
        });
    });

    describe('subtractTen', () => {
        it('should return the result when the argument is a positive number', () => {
            expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
        });

        it('should return the result with the absolute value of a number', () => {
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
        });

        it('should return the result when the argument is a floating number', () => {
            expect(mathEnforcer.subtractTen(5.55)).to.be.closeTo(-4.45, 0.01);
        });

        it('should return the result when the argument is a negative floating number', () => {
            expect(mathEnforcer.subtractTen(-5.55)).to.be.closeTo(-15.55, 0.01);
        });

        it('should return NaN when the argument is NaN', () => {
            expect(mathEnforcer.subtractTen(NaN)).to.be.NaN;
        });

        it('should return undefined when the argument is a string', () => {
            expect(mathEnforcer.subtractTen('5')).to.be.undefined;
        });

        it('should return undefined when the argument is an array', () => {
            expect(mathEnforcer.subtractTen([5])).to.be.undefined;
        });

        it('should return undefined when the argument is an object', () => {
            expect(mathEnforcer.subtractTen({ five: 5 })).to.be.undefined;
        });

        it('should return undefined when the argument is null', () => {
            expect(mathEnforcer.subtractTen(null)).to.be.undefined;
        });

        it('should return undefined when the argument is undefined', () => {
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
        });

        it('should return undefined when the argument is not present', () => {
            expect(mathEnforcer.subtractTen()).to.be.undefined;
        });
    });

    describe('sum', () => {
        it('should return the sum when the two arguments are positive numbers', () => {
            expect(mathEnforcer.sum(5, 4)).to.be.equal(9);
        });

        it('should return the sum when the two arguments are negative numbers', () => {
            expect(mathEnforcer.sum(-5, -4)).to.be.equal(-9);
        });

        it('should return the sum when the two arguments are positive floating numbers', () => {
            expect(mathEnforcer.sum(3.14, 3.14)).to.be.closeTo(6.28, 0.01);
        });

        it('should return the sum when the two arguments are negative floating numbers', () => {
            expect(mathEnforcer.sum(-3.14, -3.14)).to.be.closeTo(-6.28, 0.01);
        });

        it('should return NaN when one or the two of the arguments are NaN', () => {
            expect(mathEnforcer.sum(NaN, 5)).to.be.NaN;
            expect(mathEnforcer.sum(5, NaN)).to.be.NaN;
            expect(mathEnforcer.sum(NaN, NaN)).to.be.NaN;
        });

        it('should return undefined if the first argument is not a number', () => {
            expect(mathEnforcer.sum('5', 4)).to.be.undefined;
        });

        it('should return undefined if the second argument is not a number', () => {
            expect(mathEnforcer.sum(5, '4')).to.be.undefined;
        });
    });
});