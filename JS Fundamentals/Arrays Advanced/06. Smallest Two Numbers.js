function smallestTwoNums(array){
    let sortedArray = array.sort((a, b) => {
        return a - b;
    });
    let smalestNums = sortedArray.slice(0, 2);
    console.log(smalestNums.join(' '));
}
smallestTwoNums([30, 15, 50, 5])