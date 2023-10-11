const { expect } = require('chai');
const { PaymentPackage } = require('./paymentPackage.js');

it('should...', () => {
    const paymentPackage = new PaymentPackage('HR Services', 1500);

});

describe('PaymentPackage', () => {
    describe('constructor', () => {
        it('should return a PaymentPackage, if the arguments are valid', () => {
            const paymentPackage = new PaymentPackage('HR Services', 1500);

            expect(paymentPackage).to.be.an.instanceOf(PaymentPackage);
        });

        it('should return a PaymentPackage with the following properties: name, value, VAT, active', () => {
            const paymentPackage = new PaymentPackage('HR Services', 1500);

            expect(paymentPackage).to.have.property('name');
            expect(paymentPackage).to.have.property('value');
            expect(paymentPackage).to.have.property('VAT');
            expect(paymentPackage).to.have.property('active');
        });

        it('should return a PaymentPackage with the method toString()', () => {
            const paymentPackage = new PaymentPackage('HR Services', 1500);

            expect(paymentPackage).to.have.property('toString');
        });
    });

    describe('name', () => {
        it('should return the name of the PaymentPackage', () => {
            const paymentPackage = new PaymentPackage('HR Services', 1500);

            expect(paymentPackage.name).to.be.equal('HR Services');
        });

        it('should set the name of the PaymentPackage if the argument is valid', () => {
            const paymentPackage = new PaymentPackage('HR Services', 1500);
            paymentPackage.name = 'Consultation';

            expect(paymentPackage.name).to.be.equal('Consultation');
        });

        it('should throw an error if the argument is not a string', () => {
            const paymentPackage = new PaymentPackage('HR Services', 1500);
            const fn = function () {
                paymentPackage.name = ['HR', 'Services'];
            };

            expect(fn).to.throw('Name must be a non-empty string');
        });

        it('should throw an error if the argument an empty string', () => {
            const paymentPackage = new PaymentPackage('HR Services', 1500);
            const fn = function () {
                paymentPackage.name = '';
            };

            expect(fn).to.throw('Name must be a non-empty string');
        });
    });

    describe('value', () => {
        it('should return the value of the PaymentPackage', () => {
            const paymentPackage = new PaymentPackage('HR Services', 1500);

            expect(paymentPackage.value).to.be.equal(1500);
        });

        it('should set the value of the PaymentPackage if the argument is valid', () => {
            const paymentPackage = new PaymentPackage('HR Services', 1500);
            paymentPackage.value = 800;

            expect(paymentPackage.value).to.be.equal(800);
        });

        it('should set the value and not throw an error if the argument is 0', () => {
            const paymentPackage = new PaymentPackage('HR Services', 1500);
            const fn = function () {
                paymentPackage.value = 0;
            };

            expect(fn).to.not.throw();
        });

        it('should throw an error if the argument is not a number', () => {
            const paymentPackage = new PaymentPackage('HR Services', 1500);
            const fn = function () {
                paymentPackage.value = 'five';
            };

            expect(fn).to.throw('Value must be a non-negative number');
        });

        it('should throw an error if the argument is a negative number', () => {
            const paymentPackage = new PaymentPackage('HR Services', 1500);
            const fn = function () {
                paymentPackage.value = -1;
            };

            expect(fn).to.throw('Value must be a non-negative number');
        });
    });

    describe('VAT', () => {
        it('should return the VAT of the PaymentPackage', () => {
            const paymentPackage = new PaymentPackage('HR Services', 1500);

            expect(paymentPackage.VAT).to.be.equal(20);
        });

        it('should set the VAT of the PaymentPackage if the argument is valid', () => {
            const paymentPackage = new PaymentPackage('HR Services', 1500);
            paymentPackage.VAT = 30;

            expect(paymentPackage.VAT).to.be.equal(30);
        });

        it('should set the VAT and not throw an error if the argument is 0', () => {
            const paymentPackage = new PaymentPackage('HR Services', 1500);
            const fn = function () {
                paymentPackage.VAT = 0;
            };

            expect(fn).to.not.throw();
        });

        it('should throw an error if the argument is not a number', () => {
            const paymentPackage = new PaymentPackage('HR Services', 1500);
            const fn = function () {
                paymentPackage.VAT = 'five';
            };

            expect(fn).to.throw('VAT must be a non-negative number');
        });

        it('should throw an error if the argument is a negative number', () => {
            const paymentPackage = new PaymentPackage('HR Services', 1500);
            const fn = function () {
                paymentPackage.VAT = -1;
            };

            expect(fn).to.throw('VAT must be a non-negative number');
        });


    });

    describe('active', () => {
        it('should return true if the PaymentPackage is active', () => {
            const paymentPackage = new PaymentPackage('HR Services', 1500);

            expect(paymentPackage.active).to.be.true;
        });

        it('should set the active property of the PaymentPackage if the argument is a boolean', () => {
            const paymentPackage = new PaymentPackage('HR Services', 1500);
            paymentPackage.active = false;

            expect(paymentPackage.active).to.be.false;
        });

        it('should throw an error if the argument is not a boolean', () => {
            const paymentPackage = new PaymentPackage('HR Services', 1500);
            const fn = function () {
                paymentPackage.active = 'no';
            };

            expect(fn).to.throw('Active status must be a boolean');
        });
    });

    describe('toString', () => {
        it('should not return "[object Object]"', () => {
            const paymentPackage = new PaymentPackage('HR Services', 1500);

            expect(paymentPackage.toString()).to.not.equal('[object Object]');
        });

        it('should return the expected string (when the PaymentPackage is active)', () => {
            const paymentPackage = new PaymentPackage('HR Services', 1500);
            const output = paymentPackage.toString().trim();
            const expectedOutput = `Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`;

            expect(output).to.be.equal(expectedOutput)
        });

        it('should return the expected string (when the PaymentPackage is not active)', () => {
            const paymentPackage = new PaymentPackage('HR Services', 1500);
            paymentPackage.active = false;
            const output = paymentPackage.toString().trim();
            const expectedOutput = `Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`

            expect(output).to.be.equal(expectedOutput)
        });
    });
});