function createManager() {
    const storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    const operations = {
        restock: (element, quantity) => {
            storage[element] += quantity;
            return 'Success';
        },
        prepare: (recipe, quantity) => {
            for (const [element, neededQuantityForRecipe] of Object.entries(recipes[recipe])) {
                if (neededQuantityForRecipe * quantity > storage[element]) {
                    return `Error: not enough ${element} in stock`;
                }
            }

            for (const [element, neededQuantityForRecipe] of Object.entries(recipes[recipe])) {
                storage[element] -= neededQuantityForRecipe * quantity;
            }

            return 'Success';
        },
        report: () => {
            let output = '';

            for (const [element, quantity] of Object.entries(storage)) {
                output += `${element}=${quantity} `;
            }

            return output.trim();
        }
    }

    return function (command) {
        const [operation, param, quantity] = command.split(' ');
        return operations[operation](param, Number(quantity));
    }
}