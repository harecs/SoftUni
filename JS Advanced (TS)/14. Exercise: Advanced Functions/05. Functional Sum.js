function add(num) {
    let sum = num;

    function addOneMoreNumber(number) {
        sum += number;
        return addOneMoreNumber;
    }

    addOneMoreNumber.toString = () => sum;

    return addOneMoreNumber;
}