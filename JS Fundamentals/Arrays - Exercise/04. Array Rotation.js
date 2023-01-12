function arrayRotation(array, rotations){
    for(let i = 1; i <= rotations; i++){
        let firstElement = array.shift();
        array.push(firstElement);
    }
    let string = '';
    for(let i = 0; i < array.length; i++){
        let element = array[i];
        string += element + ' ';
    }
    console.log(string);
}
arrayRotation([1,2,3,4], 2)