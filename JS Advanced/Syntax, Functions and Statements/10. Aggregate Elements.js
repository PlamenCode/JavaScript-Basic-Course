function aggregateEl(input){

    let sumOfElements = 0;
    for (let element of input) {
        sumOfElements += element
    }
    console.log(sumOfElements);

    let sumInverse = 0;
    for (let element of input) {
        sumInverse += 1 / element;
    }
    console.log(sumInverse);

    let concatSum = '';
    for (let element of input) {
        concatSum += element + '';
    }
    console.log(concatSum);
}
aggregateEl([1,2,3])