function calculateGCD(a: number, b: number): void{
    let gcd: number = a % b;

    while (gcd !== 0) {
        a = b;
        b = gcd;
        gcd = a % b;
    }

    console.log(b);
}

calculateGCD(15, 5);
calculateGCD(2154, 458);