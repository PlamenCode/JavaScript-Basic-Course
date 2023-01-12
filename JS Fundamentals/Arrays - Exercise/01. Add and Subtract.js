function addSubtract(array){
    let sum = 0;
    let sumNewArray = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
        let num = array[i];

        if(num % 2 == 0){
            num += i;
            array[i] = num;
            sumNewArray += array[i];
        } else if(num % 2 !== 0){
            num -= i;
            array[i] = num;
            sumNewArray += array[i]
        }
    }
    console.log(array);
    console.log(sum);
    console.log(sumNewArray);
}
addSubtract([5, 15, 23, 56, 35])