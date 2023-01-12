function processOddNums(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(i % 2 !== 0){
            let element = arr[i];
            result.push(element * 2)
        }
    }
    console.log(result.reverse().join(' '));
}
processOddNums([10, 15, 20, 25])