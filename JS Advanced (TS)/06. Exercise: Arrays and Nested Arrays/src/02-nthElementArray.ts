function printElements(array: string[], nStep: number): string[] {
    const result: string[] = [];

    for (let i = 0; i < array.length; i += nStep) {
        result.push(array[i]);
    }

    return result;
}

console.log(printElements(['5', '20', '31', '4', '20'], 2));
console.log(printElements(['dsa', 'asd', 'test', 'tset'], 2));
console.log(printElements(['1', '2', '3', '4', '5'], 6));