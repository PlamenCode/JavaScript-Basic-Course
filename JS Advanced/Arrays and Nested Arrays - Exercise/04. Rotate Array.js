function rotateArr(arr, rotations){

    for(let i = 0; i < rotations; i++){
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));

}
rotateArr(['1','2','3','4'],2)
console.log('-----------------');
rotateArr(['Banana', 'Orange', 'Coconut', 'Apple'], 15)





function rotateArr2(arr, rotations){
    let length = arr.length;
    
    if(rotations < length){

        for(let i = 0; i < rotations; i++){
            arr.unshift(arr.pop());
        }
        console.log(arr.join(' '));

    } else if(rotations == length){

        console.log(arr.join(' '));

    } else {

        let realRotations = rotations % length;
        for(let i = 0; i < realRotations; i++){
            arr.unshift(arr.pop());
        }
        console.log(arr.join(' '));

    } 
}
rotateArr2(['1','2','3','4'],2)
console.log('-----------------');
rotateArr2(['Banana', 'Orange', 'Coconut', 'Apple'], 15)