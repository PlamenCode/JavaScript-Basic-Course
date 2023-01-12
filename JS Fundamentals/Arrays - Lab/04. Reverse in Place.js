function reversedArray(array){
    let result = '';
    for(let i = array.length - 1; i >= 0; i--){
        result += array[i] + ' ';
    }
   console.log(result)
}
reversedArray(['a', 'b', 'c', 'd', 'e'])


function reversedArrays(array){
    let result = '';
    for(let i = 0; i < array.length / 2; i++){
        let tempElement = array[i];

        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = tempElement
    }
    for(let i = 0; i < array.length; i++){
        let element = array[i];
        result += element;
        if(i < array.length - 1){
            result += ' ';
        }
    }
    console.log(result)
}
reversedArrays(['a', 'b', 'c', 'd','e'])