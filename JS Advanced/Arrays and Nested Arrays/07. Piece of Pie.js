function pieceOfPie(arr,firstPie,secondPie){

    let finalArr = [];
    let startIndex = arr.indexOf(firstPie);
    let endIndex = arr.indexOf(secondPie);

    for(let i = startIndex; i <= endIndex; i++){
        finalArr.push(arr[i]);
    }

    return finalArr;

}
pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie')