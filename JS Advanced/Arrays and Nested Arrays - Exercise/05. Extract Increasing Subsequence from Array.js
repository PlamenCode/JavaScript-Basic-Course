function extractIncreasingSubs(arr){
    let result = [];
    let currentBiggest = arr[0];

    for (const element of arr) {

        if(currentBiggest <= element){
            currentBiggest = element;
            result.push(element);
        }
    }
    return result;
}
console.log(extractIncreasingSubs([1,3,8,4,10,12,3,2,24]));
console.log('----------------');
extractIncreasingSubs([1,2,3,4]);
console.log('----------------');
extractIncreasingSubs([20,3,2,15,6,1])