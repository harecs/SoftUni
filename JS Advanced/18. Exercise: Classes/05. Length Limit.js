class Stringer {
    constructor(initialString, length) {
        this.innerString = initialString;
        this.innerLength = length;
    }

    increase(num) {
        this.innerLength += num;

        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    decrease(num) {
        this.innerLength -= num;

        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.innerLength >= this.innerString.length) {
            return this.innerString;
        } else {
            return this.innerString.substring(0, this.innerLength) + '...';
        }
    }
}