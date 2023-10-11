function juiceFlavors(input) {
    const juiceQuantity = {};
    const bottles = new Map();

    input.forEach(line => {
        let [flavor, quantity] = line.split(' => ');
        quantity = Number(quantity);

        if (!juiceQuantity.hasOwnProperty(flavor)) {
            juiceQuantity[flavor] = 0;
        }

        juiceQuantity[flavor] += quantity;

        while (juiceQuantity[flavor] >= 1000) {
            juiceQuantity[flavor] -= 1000;

            if (bottles.has(flavor)) {
                bottles.set(flavor, bottles.get(flavor) + 1);
            } else {
                bottles.set(flavor, 1);
            }
        }
    });

    const entries = bottles.entries();

    for (const [flavor, bottlesQuantity] of entries) {
        console.log(`${flavor} => ${bottlesQuantity}`);
    }
}