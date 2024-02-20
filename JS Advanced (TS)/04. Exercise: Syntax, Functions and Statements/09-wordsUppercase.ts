function makeWordsUppercase(string: string): void {
    const result: string = string
    .split(/[^\w]/g)
    .filter(string => string.length > 0)
    .map(word => word.toUpperCase())
    .join(', ');

    console.log(result);
}

makeWordsUppercase('Hi, how are you?');
makeWordsUppercase('hello');