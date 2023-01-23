function getFibonator(){

    let [numA, numB] = [0, 1];
    
    return () => {
        let sum = numA + numB;
        numA = numB;
        numB = sum;
        return numA;
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13