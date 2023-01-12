function calculator(numOne, numTwo, operator){
    let result = 0;
    switch(operator){
        case 'multiply': result = numOne * numTwo; break;
        case 'divide': result = numOne / numTwo; break;
        case 'add': result = numOne + numTwo; break;
        case 'subtract': result = numOne - numTwo; break;
    }
    return result;
}
let result = calculator(40,8,'divide')
console.log(result)