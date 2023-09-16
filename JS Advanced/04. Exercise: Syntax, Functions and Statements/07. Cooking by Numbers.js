function cook(numberAsString, ...operations) {
    let number = Number(numberAsString);

    const operationObj = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => num + 1,
        bake: (num) => num * 3,
        fillet: (num) => num * 0.8
    }

    operations.forEach(operation => {
        number = operationObj[operation](number);
        console.log(number);
    });
}