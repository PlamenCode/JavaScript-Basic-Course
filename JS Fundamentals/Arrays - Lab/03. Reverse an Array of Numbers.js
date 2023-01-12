function reverseArrayNum(num , array){
    let result = ''

    for(let i = num - 1; i >= 0; i--){
        result += array[i] + ' '
    }
    console.log(result)
}
reverseArrayNum(3, [10, 20, 30, 40, 50])
