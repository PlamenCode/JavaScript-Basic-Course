function magicSum(arr, sum){
    for(let i = 0; i < arr.length; i++){
        for(let k = i + 1; k < arr.length; k++){
            let tempSum = arr[i] + arr[k];
            if(tempSum == sum){
                console.log(`${arr[i]} ${arr[k]}`);
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23],8)