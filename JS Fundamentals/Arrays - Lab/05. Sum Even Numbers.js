function sumOfEvenNums(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        let num = Number(array[i]);
        if(num % 2 == 0){
            sum += num;
        }
    }
    console.log(sum)
}
sumOfEvenNums(['1','2','3','4','5','6'])

function sumOfEvenNumsForOf(array){
    let sum = 0;
    for(let numText of array){
        let num = Number(numText);
        if(num % 2 == 0){
            sum += num;
        }
    }
    console.log(sum);
}
sumOfEvenNumsForOf(['1','2','3','4','5','6'])