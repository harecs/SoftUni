class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.wines.length >= this.space) {
            throw new Error('Not enough space in the cellar.');
        }

        const bottle = { wineName, wineType, price, paid: false };
        this.wines.push(bottle);

        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        // that price is strange, so take a look
        let output = undefined;

        this.wines.forEach(wine => {
            if (wine.wineName === wineName) {
                if (wine.paid) {
                    output = new Error(`${wineName} has already been paid.`);
                } else {
                    wine.paid = true;
                    this.bill += price;
                    output = `You bought a ${wineName} for a ${price}$.`;
                }
            }
        });

        if (output) {
            if (typeof output == 'string') {
                return output;
            } else {
                throw output;
            }
        } else {
            throw new Error(`${wineName} is not in the cellar.`);
        }
    }

    openBottle(wineName) {
        let output = undefined;

        this.wines.forEach(wine => {
            if (wine.wineName === wineName) {
                if (wine.paid) {
                    this.wines = this.wines.filter((x) => x.wineName !== wineName);
                    output = `You drank a bottle of ${wineName}.`;
                } else {
                    output = new Error(`${wineName} need to be paid before open the bottle.`)
                }
            }
        });

        if (output) {
            if (typeof output == 'string') {
                return output;
            } else {
                throw output;
            }
        } else {
            throw new Error(`The wine, you're looking for, is not found.`);
        }
    }

    cellarRevision(wineType) {
        if (!wineType) {
            let output = '';
            output += `You have space for ${this.space - this.wines.length} bottles more.\n`;
            output += `You paid ${this.bill}$ for the wine.\n`;

            this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));

            for (const wine of this.wines) {
                output += `${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.\n`;
            }

            return output.trim();
        } else {
            let output = '';
            const winesOfType = this.wines.filter(wine => wine.wineType == wineType);
            
            if (winesOfType.length == 0) {
                throw new Error(`There is no ${wineType} in the cellar.`);
            }

            for (const wine of winesOfType) {
                output += `${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.\n`;
            }

            return output.trim();
        }
    }
}