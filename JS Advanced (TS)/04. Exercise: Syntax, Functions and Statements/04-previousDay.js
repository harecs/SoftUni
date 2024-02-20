function getPreviousDay(year, month, day) {
    var myDate = new Date(year, month - 1, day);
    myDate.setDate(myDate.getDate() - 1);
    return "".concat(myDate.getFullYear(), "-").concat(myDate.getMonth() + 1, "-").concat(myDate.getDate());
}
console.log(getPreviousDay(2016, 9, 30));
console.log(getPreviousDay(2015, 5, 10));
