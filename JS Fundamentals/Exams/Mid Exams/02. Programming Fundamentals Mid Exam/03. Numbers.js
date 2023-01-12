function numbers(input){
    let arr = input.split(' ');
    let avgValue = 0;
    let sum = 0;
    let elementCount = 0;

    for(let i = 0; i < arr.length; i++){
        let element = Number(arr[i]);
        sum += element;
        elementCount++;
    }
    avgValue = sum / elementCount;

    let arrBiggerThanAvg = [];
    for (let i = 0; i < arr.length; i++) {
        let element = Number(arr[i]);
        if(element > avgValue){
            arrBiggerThanAvg.push(element);
        }
    }

    let result = '';
    arrBiggerThanAvg = arrBiggerThanAvg.sort(function(a, b){return b-a});
    if(arrBiggerThanAvg.length < 1){
        console.log('No');
    } else {

    for(let i = 0; i < arrBiggerThanAvg.length; i++){
        if(i < 5){
        let element = arrBiggerThanAvg[i];
        result += element + ' ';
        }
    } 
    console.log(result);
    }
}
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')