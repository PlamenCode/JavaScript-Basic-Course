function listOfNames(arr){

    let sortedArr = arr.sort((a,b) => a.localeCompare(b));
    for(let i = 1; i <= sortedArr.length; i++){
        console.log(`${i}.${sortedArr[i-1]}`);
    }
}
listOfNames(["John","Bob","Christina","Ema"])
