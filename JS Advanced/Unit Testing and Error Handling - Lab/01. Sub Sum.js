function subSum(arr, start, end){

    if(!Array.isArray(arr)){
        return NaN;
    }

    let startIndex = Math.max(start, 0);
    let endIndex = Math.min(end, arr.length-1);

    let resultArr = arr.slice(startIndex, ++endIndex)
    let result = resultArr.reduce((a,b) => a + Number(b), 0);
    return result;
}
console.log(subSum[10, 'twenty', 30, 40], 0, 2)
