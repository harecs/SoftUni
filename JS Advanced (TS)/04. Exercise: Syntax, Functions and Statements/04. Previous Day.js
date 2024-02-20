function getPreviousDay(year, month, day) {
    let myDate = new Date(year, month - 1, day);
    myDate.setDate(myDate.getDate() - 1);
    
    return `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`;
}