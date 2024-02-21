type Command = 'add' | 'remove';

function addAndRemoveElements(commands: Command[]): void {
    const arr: number[] = [];

    commands.forEach((x: Command, i: number) => { x == 'add' ? arr.push(i + 1) : arr.pop() });

    console.log(arr.length ? arr.join('\n') : 'Empty');
}

addAndRemoveElements(['add', 'add', 'add', 'add']);
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElements(['remove', 'remove', 'remove']);