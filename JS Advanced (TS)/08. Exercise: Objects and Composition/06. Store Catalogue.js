function printCatalogue(inputArray) {
    const catalogue = {};

    for (const line of inputArray) {
        let [product, price] = line.split(' : ');
        price = Number(price);

        if (catalogue[product[0]] == undefined) {
            catalogue[product[0]] = [];
        }

        catalogue[product[0]].push({ product, price });
    }

    Object.keys(catalogue)
        .sort((a, b) => a.localeCompare(b))
        .forEach(char => {
            console.log(char);

            catalogue[char]
                .sort((a, b) => a['product'].localeCompare(b['product']))
                .forEach(obj => {
                    console.log(`  ${obj.product}: ${obj.price}`);
                });
        });
}