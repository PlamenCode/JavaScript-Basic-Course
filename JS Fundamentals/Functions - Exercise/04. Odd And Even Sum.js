function sumOfAllOddAndEvenNums(num){
    let sumOdd = 0;
    let sumEven = 0;
    let numString = num.toString();
    let numLength = numString.length;
        for(let i = 0; i <= numLength -1; i++){
            let tempNum = Number(numString[i])
            if(tempNum % 2 == 0){
                sumEven += tempNum;
            } else {
                sumOdd += tempNum;
            }
        }
        let result = `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;
        console.log(result)
}
sumOfAllOddAndEvenNums(123456789987)