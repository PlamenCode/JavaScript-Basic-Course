function sortingNums(arr){

    let numsAssending = arr.sort((a,b) => a - b);
    let result = [];

    while(numsAssending.length){
        result.push(numsAssending.shift());
        result.push(numsAssending.pop());
    }
    return result;

}
console.log(sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
