function autoEngineeringCompany(input) {
    const brands = new Map();

    for (let line of input) {
        let [brand, model, quantity] = line.split(' | ');
        quantity = Number(quantity);

        if (!brands.has(brand)) {
            brands.set(brand, new Map);
        }

        if (!brands.get(brand).get(model)) {
            brands.get(brand).set(model, 0);
        }

        const currentQuantity = brands.get(brand).get(model);
        brands.get(brand).set(model, currentQuantity + quantity);
    }

    let output = '';

    const brandsEntries = brands.entries();

    for (const brandEntry of brandsEntries) {
        const brandName = brandEntry[0];
        const brandModels = brandEntry[1];

        output += `${brandName}\n`;

        for (const modelEntry of brandModels.entries()) {
            const modelName = modelEntry[0];
            const modelQuantity = modelEntry[1];

            output += `###${modelName} -> ${modelQuantity}\n`;
        }
    }

    console.log(output.trim());
}