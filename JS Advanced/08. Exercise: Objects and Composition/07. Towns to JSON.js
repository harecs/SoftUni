function townsToJSON(inputArray) {
    inputArray.shift();
    const townsArray = [];


    inputArray.forEach(line => {
        const townObj = {
            "Town": null,
            "Latitude": null,
            "Longitude": null
        };

        const columns = line
            .split('|')
            .filter(x => x)
            .map(x => x.trim());

        const latitude = Number(columns[1]);
        const longitude = Number(columns[2]);

        townObj['Town'] = columns[0];
        townObj['Latitude'] = Number(latitude.toFixed(2));
        townObj['Longitude'] = Number(longitude.toFixed(2));

        townsArray.push(townObj);
    });

    return JSON.stringify(townsArray);
}