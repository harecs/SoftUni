function makeWordsUppercase(string) {
    var result = string
        .split(/[^\w]/g)
        .filter(function (string) { return string.length > 0; })
        .map(function (word) { return word.toUpperCase(); })
        .join(', ');
    console.log(result);
}
makeWordsUppercase('Hi, how are you?');
makeWordsUppercase('hello');
