function smallestOfTwoNums(array){
    let sortedArr = array.sort((a, b) => a - b);
    let smalestNums = `${sortedArr[0]} ${sortedArr[1]}`;
    console.log(smalestNums);

}
smallestOfTwoNums([30, 15, 50, 5]);
smallestOfTwoNums([3, 0, 10, 4, 7, 3]);