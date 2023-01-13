function sumFirstAndLastEl(input){
    let array = input.map(Number)
    console.log(array.shift() + array.pop())

}
sumFirstAndLastEl(['20', '30', '40'])