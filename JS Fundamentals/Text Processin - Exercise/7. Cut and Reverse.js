function cutAndReverse(text){
    let textArr = text.split('');
    let textLength = textArr.length;
    let secondPart = [];
    let firstPart = [];

    for(let i = textLength-1 ; i >= textLength / 2; i--){
        secondPart.push(textArr[i])
    }
    for(let i = (textLength / 2) - 1; i >= 0; i--){
        firstPart.push(textArr[i])
    }
    console.log(firstPart.join(''));
    console.log(secondPart.join(''));  
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')