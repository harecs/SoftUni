function sortNames(names) {
    names.sort((a, b) => a.localeCompare(b));
    names.forEach((name, i) => {
        console.log(`${i + 1}.${name}`);
    });
}