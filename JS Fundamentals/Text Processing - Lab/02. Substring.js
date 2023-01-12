function subtract(string, startIndex, numToSub){


    let arrayStr = Array.from(string)
    let result = arrayStr.splice(startIndex,numToSub)
    console.log(result.join(''));
    
}
subtract('SkipWord', 4, 7)