function diagonalSum(arr){

    let mainDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for(let i = 0; i < arr.length; i++){
        mainDiagonalSum += arr[i][i];
        secondDiagonalSum += arr[i][arr.length -1 -i]
    }
    console.log(mainDiagonalSum, secondDiagonalSum);
    

}
diagonalSum([
    [20, 40],
    [10, 60]
]);

diagonalSum([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
])