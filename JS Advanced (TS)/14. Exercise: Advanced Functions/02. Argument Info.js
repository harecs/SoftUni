function printArgumentsInfo(...params) {
    const tally = {};

    params.forEach(param => {
        const type = typeof param;

        if (!tally.hasOwnProperty(type)) {
            tally[type] = 0;
        }

        tally[type]++;
        console.log(`${type}: ${param}`);
    });

    const sortedTallyKeys = Object.keys(tally).sort((a, b) => tally[b] - tally[a]);

    for (const type of sortedTallyKeys) {
        console.log(`${type} = ${tally[type]}`);
    }
}