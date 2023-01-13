function biggerHalf(array){

    let sortedArr = array.sort((a, b) => a - b);
    let arrHalfIndex = Math.floor(sortedArr.length / 2);

    let resultArr = [];
    for(let i = arrHalfIndex; i < sortedArr.length; i++){
        resultArr.push(sortedArr[i])
    }
    return resultArr;

}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
