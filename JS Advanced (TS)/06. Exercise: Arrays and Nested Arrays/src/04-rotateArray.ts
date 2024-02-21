function rotateArray(arr: Array<any>, num: number): void {
    while (num > 0) {
        arr.unshift(arr.pop());
        num--;
    }

    console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);