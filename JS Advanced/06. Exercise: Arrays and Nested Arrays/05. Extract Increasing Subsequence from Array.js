function extractSequence(array) {
    return array.reduce((acc, num) => {
        if (num >= acc[acc.length - 1] || acc.length == 0) {
            acc.push(num);
        }

        return acc;
    }, []);
}