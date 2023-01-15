function magicMatrix(matrix){
    let isMagical = true;

    for(let i = 0; i < matrix.length - 1; i++){
        let currenRowSum = matrix[i].reduce((a,b) => a+b, 0);
        let nextRowSum = matrix[i+1].reduce((a,b) => a+b, 0);
        let currentColSum = 0;
        let nextColSum = 0;

        for(let j = 0; j < matrix.length; j++){
            currentColSum += matrix[i][j];
            nextColSum += matrix[i + 1][j]
        }

        if(currenRowSum !== nextRowSum || currentColSum !== nextColSum){
            isMagical = false;
        }
    }
    return isMagical;
}

magicMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])