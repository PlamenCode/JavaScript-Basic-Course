function firsLastArrayElements(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        if(i == 0 || i == array.length - 1){
            sum += array[i];
        }
    }
    console.log(sum)
}
firsLastArrayElements([20, 30, 40])

function sumArrayElements(input){
    let first = input[0];
    let last = input[input.length - 1];
    console.log(first + last)
}
sumArrayElements([20, 30, 40])
