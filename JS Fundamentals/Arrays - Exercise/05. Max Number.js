function maxNum(array1){
    let result = '';
    for(let i = 0; i < array1.length; i++){
        let isBigger = true;
        let num = array1[i];
        for(let k = i + 1; k < array1.length; k++){
            let numToCompare = array1[k];
            if(num <= numToCompare){
                isBigger = false;
                break;
            }
        }
        if(isBigger){
            result += num;
            result += ' '
        }
    }
    console.log(result)
}
maxNum([1, 4, 3, 2])