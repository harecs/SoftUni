function listProcessor(input) {
    let list = [];

    const processes = {
        add: (string) => list.push(string),
        remove: (string) => list = list.filter(x => x != string),
        print: () => console.log(list.join(','))
    }

    input.forEach(line => {
        const [command, string] = line.split(' ');
        processes[command](string);
    });
}