function negativeOrPositive(input){
    let numbers = [];
    for (let el of input) {
        let num = Number(el);
        if(num < 0){
            numbers.unshift(num);
        } else {
            numbers.push(num);
        }
    }
    for( let el of numbers){
        console.log(el);
    }
}
negativeOrPositive(['7', '-2', '8', '9'])