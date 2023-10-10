class List {
    constructor() {
        this._list = [];
        this.size = this._list.length;
    }

    add(num) {
        if (typeof(num) !== 'number') {
            throw new TypeError('The argument is not of type Number');
        }
        this._list.push(num);
        this._list.sort((a, b) => a - b);
        this.size = this._list.length;
    }

    remove(i) {
        if (i >= 0 && i < this._list.length) {
            this._list.splice(i, 1);
            this.size = this._list.length;
        }
    }

    get(i) {
        if (i >= 0 && i < this._list.length) {
            return this._list[i];
        }
    }
}