function equalSums(arr){
    let rightSum = 0;
    let leftSum = 0;
    let correctIndex = 0;
    let exists = false;

    for(let i = 0; i < arr.length; i++){
        rightSum = 0;
        leftSum = 0;
        for(let l = i - 1; l >= 0; l--){
            if(l >= 0 && l < i){
                let leftElement = arr[l]
                leftSum += leftElement;
            } else{
                leftSum = 0;
            }
        }
        for(let r = i + 1; r < arr.length; r++){
            if(r >= arr.length){
                rightSum = 0;
            } else {
            let rightElement = arr[r];
            rightSum += rightElement;
            }
        }
        if(rightSum == leftSum){
            correctIndex = i;
            exists = true;
        }
    }
    if(exists){
        console.log(correctIndex);
    } else{
        console.log('no')
    }
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])