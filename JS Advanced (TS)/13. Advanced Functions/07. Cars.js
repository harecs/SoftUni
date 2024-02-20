function carsProcessor(input) {
    const carsObj = {};

    const operations = {
        create: (name) => carsObj[name] = {},
        inherit: (name, parentName) => carsObj[name] = Object.setPrototypeOf({}, carsObj[parentName]),
        set: (name, key, value) => carsObj[name][key] = value,
        print: (name) => {
            const properties = Object.getOwnPropertyNames(carsObj[name]);
            const outputArray = [];
            let prototypeObj = Object.getPrototypeOf(carsObj[name]);

            properties.forEach(property => {
                outputArray.push(`${property}:${carsObj[name][property]}`);
            });

            pushPrototypeEntries(prototypeObj);

            while (Object.getPrototypeOf(prototypeObj)) {
                prototypeObj = Object.getPrototypeOf(prototypeObj);
                pushPrototypeEntries(prototypeObj);
            }
            
            console.log(outputArray.join(','));

            function pushPrototypeEntries(obj) {
                Object.keys(obj).forEach(property => {
                    outputArray.push(`${property}:${carsObj[name][property]}`);
                });
            }
        }
    }

    input.forEach(line => {
        const [operation, firstParam, secondParam, thirdParam] = line.split(' ');

        if (operation == 'create') {
            if (secondParam) {
                operations.inherit(firstParam, thirdParam);
            } else {
                operations.create(firstParam);
            }
        } else if (operation == 'set') {
            operations.set(firstParam, secondParam, thirdParam);
        } else if (operation == 'print') {
            operations.print(firstParam);
        }
    });
}