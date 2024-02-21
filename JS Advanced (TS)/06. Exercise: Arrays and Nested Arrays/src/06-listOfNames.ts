type Name = string;

function sortNames(names: Name[]): void {
    names.sort((a, b) => a.localeCompare(b));
    names.forEach((name, i) => {
        console.log(`${i + 1}.${name}`);
    });
}

sortNames(["John", "Bob", "Christina", "Ema"]);