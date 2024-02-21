function rotateArray(arr, num) {
    while (num > 0) {
        arr.unshift(arr.pop());
        num--;
    }

    console.log(arr.join(' '));
}