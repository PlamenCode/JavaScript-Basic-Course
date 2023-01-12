function sorting(input){
    let sortedArray = input.sort((a,b) => a-b);
    let result = [];

    for(let i = 0; i < sortedArray.length; i++){
        let lastEl = sortedArray.pop();
        let firstEl = sortedArray.shift();
        result.push(lastEl);
        result.push(firstEl);
    }
    let lastEl = sortedArray.pop();
    let firstEl = sortedArray.shift();
    result.push(lastEl);
    result.push(firstEl);

    console.log(result.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])