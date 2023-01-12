function sumOfNToM(num1, num2){
    let nNum = Number(num1);
    let mNum = Number(num2);
    let result = 0;

    for(let i = nNum; i <= mNum; i++){
        result = result + i;
    }
    console.log(result);
}
sumOfNToM('-8','20')