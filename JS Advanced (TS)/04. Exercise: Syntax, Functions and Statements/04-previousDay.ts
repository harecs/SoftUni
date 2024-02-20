function getPreviousDay(year: number, month: number, day: number): string {
    let myDate: Date = new Date(year, month - 1, day);
    myDate.setDate(myDate.getDate() - 1);
    
    return `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`;
}

console.log(getPreviousDay(2016, 9, 30));
console.log(getPreviousDay(2015, 5, 10));