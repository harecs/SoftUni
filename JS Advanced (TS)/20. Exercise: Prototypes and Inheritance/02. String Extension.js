(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return this.valueOf();
        }

        return str.concat(this.valueOf());
    }

    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return this.valueOf();
        }

        return this.valueOf().concat(str);
    }

    String.prototype.isEmpty = function () {
        return this.length === 0;
    }

    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        }

        if (this.length <= n) {
            return this.valueOf();
        }

        if (this.includes(' ')) {
            const arr = this.valueOf().split(' ');

            while (arr.join(' ').length > (n - 3)) {
                arr.pop();
            }

            return arr.join(' ').concat('...');
        } else {
            return this.slice(0, (n - 3)).concat('...');
        }
    }

    String.format = function (str, ...params) {
        params.forEach((param, i) => {
            str = str.replace(`{${i}}`, param);
        });

        return str;
    }
})();