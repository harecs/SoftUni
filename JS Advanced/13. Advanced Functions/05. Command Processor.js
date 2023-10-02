function solution() {
    let string = '';

    return {
        append: (input) => string += input,
        removeStart: (n) => string = string.substring(n),
        removeEnd: (n) => string = string.substring(0, string.length - n),
        print: () => console.log(string)
    }
}