function addSubtract(num1, num2, num3){
    function addNums(num1, num2){
        return num1 + num2;
    }
    let sumAdd = addNums(num1,num2);

    function subNums (sumAdd, num3){
        return sumAdd - num3;
    }
    let result = subNums(sumAdd, num3);
    console.log(result);
}
addSubtract(10,3,10)
