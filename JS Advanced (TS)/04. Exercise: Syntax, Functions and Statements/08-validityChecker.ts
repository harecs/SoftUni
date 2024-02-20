function validate(x1: number, y1: number, x2: number, y2: number): void {
    console.log(`{${x1}, ${y1}} to {0, 0} is ${checkIsValid(x1, y1, 0, 0)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${checkIsValid(x2, y2, 0, 0)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${checkIsValid(x1, y1, x2, y2)}`);

    function checkIsValid(x1: number, y1: number, x2: number, y2: number): string {
        const result: number = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return result % 1 === 0 ? `valid` : `invalid`;
    }
}

validate(3, 0, 0, 4);
validate(2, 1, 1, 1);