function returnDayInAMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
}

console.log(returnDayInAMonth(1, 2012));
console.log(returnDayInAMonth(2, 2021));