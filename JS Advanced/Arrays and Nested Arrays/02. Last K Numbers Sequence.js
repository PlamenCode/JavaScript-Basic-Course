function lastKNum(numsRep, numsAdd){
    let arr = [1];

    for(let i = 1; i < numsRep; i++){

        let sum = 0;
        let startIndex = Math.max(0, i - numsAdd)

        for(let j = startIndex; j < i; j++){
            sum += arr[j]
        }
        arr[i] = sum;
    }
    return arr;

}
lastKNum(8,2)