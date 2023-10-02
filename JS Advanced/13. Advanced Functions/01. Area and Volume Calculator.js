function solve(area, vol, input) {
    let inputArray = JSON.parse(input);
    inputArray.map(obj => {
        obj.x = Number(obj.x);
        obj.y = Number(obj.y);
        obj.z = Number(obj.z);
    });
    const outputArray = [];

    inputArray.forEach(obj => {
        outputArray.push({
            area: area.apply(obj),
            volume: vol.apply(obj)
        });
    });

    return outputArray;
}

function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}