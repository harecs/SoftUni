class Hex {
    constructor(decimalNumber) {
        this.value = decimalNumber;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }

    plus(input) {
        if (input instanceof Hex) {
            return new Hex(this.value + input.value);
        } else if (typeof (input) == 'number') {
            return new Hex(this.value + input);
        }
    }

    minus(input) {
        if (input instanceof Hex) {
            return new Hex(this.value - input.value);
        } else if (typeof (input) == 'number') {
            return new Hex(this.value - input);
        }
    }

    parse(hexadecimalNumber) {
        return parseInt(hexadecimalNumber, 16);
    }
}