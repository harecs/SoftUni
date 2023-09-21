function printLowestPrices(input) {
    const productsObj = {};

    input.forEach(line => {
        let [town, product, price] = line.split(' | ');
        price = Number(price);

        if (productsObj[product] && price < productsObj[product].price) {
            productsObj[product].price = price;
            productsObj[product].town = town;
        } else if (productsObj[product] == undefined) {
            productsObj[product] = { town, price };
        }
    });

    Object.keys(productsObj).forEach(product => {
        console.log(`${product} -> ${productsObj[product].price} (${productsObj[product].town})`);
    });
}