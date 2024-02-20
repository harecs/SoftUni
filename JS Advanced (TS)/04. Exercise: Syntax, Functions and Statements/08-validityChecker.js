function validate(x1, y1, x2, y2) {
    console.log("{".concat(x1, ", ").concat(y1, "} to {0, 0} is ").concat(checkIsValid(x1, y1, 0, 0)));
    console.log("{".concat(x2, ", ").concat(y2, "} to {0, 0} is ").concat(checkIsValid(x2, y2, 0, 0)));
    console.log("{".concat(x1, ", ").concat(y1, "} to {").concat(x2, ", ").concat(y2, "} is ").concat(checkIsValid(x1, y1, x2, y2)));
    function checkIsValid(x1, y1, x2, y2) {
        var result = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        return result % 1 === 0 ? "valid" : "invalid";
    }
}
validate(3, 0, 0, 4);
validate(2, 1, 1, 1);
