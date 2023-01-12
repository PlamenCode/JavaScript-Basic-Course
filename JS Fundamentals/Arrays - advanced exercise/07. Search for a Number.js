function searchingFoANum(arr,nums){
    let numsToTake = nums[0];
    let numsToDel = nums[1];
    let numToLookFor = nums[2];
    
    let numsToLook = [];
    let numCount = 0;

    for(let i = numsToDel; i < numsToTake; i++){
        let tempNum = arr[i];
        numsToLook.push(arr[i]);
        if(numToLookFor === tempNum){
            numCount++
        }
    }
    console.log(`Number ${numToLookFor} occurs ${numCount} times.`);

}
searchingFoANum([5, 2, 3, 4, 1, 6],

    [5, 2, 3])