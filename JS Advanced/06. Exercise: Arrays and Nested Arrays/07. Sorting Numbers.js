function sortNumbers(numbers) {
    const numbersCount = numbers.length;
    numbers.sort((a, b) => a - b);
    const result = [];
    
    for (let i = 0; i < numbersCount; i++) {
        result.push(i % 2 == 0 ? numbers.shift() : numbers.pop()); 
    }

    return result;
}