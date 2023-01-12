function smallestOfThreeNums(num1, num2, num3){
    let smalestNum = Number.MIN_SAFE_INTEGER;
    if(num1 < num2 && num1 < num3){
        smalestNum = num1;
    } else if(num2 < num1 && num2 < num3){
        smalestNum = num2;
    } else {
        smalestNum = num3;
    }
    return smalestNum;
}
let result = smallestOfThreeNums(5,2,3);
console.log(result)