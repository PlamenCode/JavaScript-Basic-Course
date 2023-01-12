function stringLength(input){

    let avg = [];
    let sum = 0;

    for (let element of input) {
        let elementLengt = element.length;
        avg.push(elementLengt);
        sum += elementLengt
    }
    console.log(sum);


    let numOfNums = 0;
    for (let num of avg) {
        numOfNums++;
    }

    let avgResult = sum / numOfNums;
    console.log(Math.floor(avgResult));
}
stringLength(['chocolate', 'ice cream', 'cake'])

function stringLength2(arr1, arr2, arr3){
    let sumLength;
    let avgLength;

    let lengthArr1 = arr1.length;
    let lengthArr2 = arr2.length;
    let lengthArr3 = arr3.length;

    sumLength = lengthArr1 + lengthArr2 + lengthArr3;
    avgLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(avgLength);
}
stringLength2('chocolate', 'ice cream', 'cake')
