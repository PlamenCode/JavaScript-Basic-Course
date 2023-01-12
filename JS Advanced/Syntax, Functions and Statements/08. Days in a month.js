function dayInMonth(month, year){
    let result = new Date(year, month , 0).getDate();
    console.log(result);
}
dayInMonth(2,2021)