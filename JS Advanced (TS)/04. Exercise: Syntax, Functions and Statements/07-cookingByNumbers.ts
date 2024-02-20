type Operation = 'chop' | 'dice' | 'spice' | 'bake' | 'fillet';

function cook(numberAsString: string, ...operations: Operation[]): void {
    let number: number = Number(numberAsString);

    const operationObj: object = {
        chop: (num: number): number => num / 2,
        dice: (num: number): number => Math.sqrt(num),
        spice: (num: number): number => num + 1,
        bake: (num: number): number => num * 3,
        fillet: (num: number): number => num * 0.8
    }

    operations.forEach(operation => {
        number = operationObj[operation](number);
        console.log(number);
    });
}

cook('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet');