function heroicInventory(inputArray) {
    const heroes = [];

    for (const line of inputArray) {
        let [name, level, itemsString] = line.split(' / ');
        level = Number(level);
        const items = itemsString ? itemsString.split(', ') : [];

        heroes.push({ name, level, items });
    }

    const heroesJSON = JSON.stringify(heroes);
    console.log(heroesJSON);
}