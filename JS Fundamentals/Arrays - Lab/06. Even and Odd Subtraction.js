function evenOddSub(array){
    let sumEven = 0;
    let sumOdd = 0;

    for(let numText of array){
        let num = Number(numText);
        if(num % 2 == 0){
            sumOdd += num;
        } else {
            sumEven += num;
        }
    }
    console.log(sumOdd - sumEven)
}
//evenOddSub([1,2,3,4,5,6])
evenOddSub([3,5,7,9])