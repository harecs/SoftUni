function sequence(input) {
    let n = Number(input);
    let num = 1;

    while (num <= n) {
        console.log(num);
        num =  2 * num + 1;
    }
}