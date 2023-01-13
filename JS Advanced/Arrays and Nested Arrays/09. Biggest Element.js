function biggestElement(array){
    let biggestNum = Number.MIN_SAFE_INTEGER;

    for (const row of array) {
        for (const el of row) {
            if(el > biggestNum){
                biggestNum = el;
            }
        }
    }
    return biggestNum;
}
biggestElement([
    [20, 50, 10],
    [8, 33, 145]
])