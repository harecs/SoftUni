function calculateCircleArea(input) {
    const inputType = typeof input;

    if (inputType == 'number') {
        const area = Math.PI * Math.pow(input, 2);
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}