function mergeArrays(arr1, arr2){
    let arrayPrint = [];
    let blankSpaces = ` - `;

    for(let i = 0; i < arr1.length ; i++){
        let sumNums = 0;
        if(i % 2 == 0){
            let num1 = Number(arr1[i]);
            let num2 = Number(arr2[i]);
            sumNums = num1 + num2;
            arrayPrint += sumNums;
        } else if(i % 2 !== 0){
            let ConcatenatedStrings = arr1[i] + arr2[i];
            arrayPrint += ConcatenatedStrings;
        }
        if(i < arr1.length - 1){
            arrayPrint += blankSpaces;
        }
    }
    console.log(arrayPrint)
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)