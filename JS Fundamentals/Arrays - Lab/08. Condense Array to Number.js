function condenseArray(array){
    while(array.length > 1){
        let condensedArray = Array(array.length - 1);
        for(let i = 0; i < array.length - 1; i++){
            condensedArray[i] = Number(array[i] + array[i + 1]);
        }
        array = condensedArray;
    }
    console.log(`${array[0]}`);
}
condenseArray([2,10,3])