function sameNums(num){
    const numArr = num.toString().split('').map(n => Number(n));

    const isSame = numArr.filter(n => n != numArr[0]).length ? false : true;
    let sum = numArr.reduce((num1, num2) => num1 + num2);

    console.log(isSame);
    console.log(sum);

}
sameNums(22222)