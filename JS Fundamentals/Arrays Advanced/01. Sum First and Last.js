function firstAndLastSum(arr){
    let firstEl = Number(arr.shift());//Number(arr[0])
    let lastEl = Number(arr.pop());//Number(arr[arr.length - 1])
    let sum = firstEl + lastEl
    console.log(sum);

}
firstAndLastSum([10,20,10])