function makeWordsUppercase(string) {
    const result = string
    .split(/[^\w]/g)
    .filter(string => string.length > 0)
    .map(word => word.toUpperCase())
    .join(', ');

    console.log(result);
}