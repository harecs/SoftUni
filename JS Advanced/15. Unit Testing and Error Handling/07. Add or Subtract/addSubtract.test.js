const { expect } = require('chai');
const createCalculator = require('./addSubtract.js').createCalculator;

describe('createCalculator', () => {
    it('should return an object', () => {
        const calculator = createCalculator();

        expect(calculator).to.be.an('object');
    });

    it('should return an object having properties: add, subtract, get', () => {
        const calculator = createCalculator();

        expect(calculator).to.have.own.property('add');
        expect(calculator).to.have.own.property('subtract');
        expect(calculator).to.have.own.property('get');
    });

    it('should return an object having methods: add, subtract, get', () => {
        const calculator = createCalculator();

        expect(calculator.add).to.be.a('function');
        expect(calculator.subtract).to.be.a('function');
        expect(calculator.get).to.be.a('function');
    });

    it("should return an object that keeps an internal sum that can't be modified from the outside", () => {
        const calculator = createCalculator();

        expect(calculator.value).to.be.undefined;
        expect(calculator.value += 5).to.be.NaN;
    });

    it('should return an object with method add (the method should add the number argument to the internal sum)', () => {
        const calculator = createCalculator();

        calculator.add(5);
        calculator.add(4);

        expect(calculator.get()).to.be.equal(9);
    });

    it('should return an object with method add (the method should work with negative numbers)', () => {
        const calculator = createCalculator();

        calculator.add(-5);
        calculator.add(-4);

        expect(calculator.get()).to.be.equal(-9);
    });

    it('should return an object with method subtract (the method should subtract the number argument to the internal sum)', () => {
        const calculator = createCalculator();

        calculator.add(5);
        calculator.subtract(4);

        expect(calculator.get()).to.be.equal(1);
    });

    it('should return an object with method subtract (the method should work with negative numbers)', () => {
        const calculator = createCalculator();

        calculator.subtract(-5);
        calculator.subtract(-4);

        expect(calculator.get()).to.be.equal(9);
    });

    it('should return an object having methods add and subtract that work with numbers as strings', () => {
        const calculator = createCalculator();

        calculator.add('5');
        calculator.subtract('4');

        expect(calculator.get()).to.be.equal(1);
    });

    it('should return an object with method get, that returns 0 if the other methods were not used', () => {
        const calculator = createCalculator();

        expect(calculator.get()).to.be.equal(0);
    });
});