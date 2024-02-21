function extractSequence(array: number[]): number[] {
    return array.reduce((acc: number[], num: number) => {
        if (num >= acc[acc.length - 1] || acc.length == 0) {
            acc.push(num);
        }

        return acc;
    }, []);
}