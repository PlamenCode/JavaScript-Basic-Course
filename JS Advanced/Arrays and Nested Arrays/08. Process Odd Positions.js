function processOddNums(arr){
    //take elements on odd positions
    let  [...finalArr] = arr.filter((a,b) => b % 2 != 0);

    //double all elements in the new array
    finalArr = finalArr.map(n => n * 2);

    //reverse the order of the array
    finalArr = finalArr.reverse();

    return finalArr.join(' ');
}
processOddNums([10, 15, 20, 25]);
processOddNums([3, 0, 10, 4, 7, 3]);



function processOddNums2(arr){
    let  [...finalArr] = arr
        .filter((a,b) => b % 2 != 0)
        .map(n => n * 2)
        .reverse()

    return finalArr.join(' ');
}
let result = processOddNums2([10, 15, 20, 25]);
console.log(result);
processOddNums2([3, 0, 10, 4, 7, 3]);