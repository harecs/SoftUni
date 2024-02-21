function addAndRemoveElements(commands) {
    const arr = [];

    commands.forEach((x, i) => { x == 'add' ? arr.push(i + 1) : arr.pop() });

    console.log(arr.length ? arr.join('\n') : 'Empty');
}