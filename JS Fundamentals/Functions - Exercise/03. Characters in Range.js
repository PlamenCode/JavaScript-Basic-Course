function charecterInRnage(char1, char2){
    let result = '';
    let char1Num = char1.charCodeAt();
    let char2Num = char2.charCodeAt();
    if(char1Num > char2Num){
        for(let i = char2Num + 1; i < char1Num; i++){
            let tempChar = String.fromCharCode(i);
            result += tempChar + ' ';
        }
    } else{
        for(let i = char1Num + 1; i < char2Num; i++){
            let tempChar = String.fromCharCode(i);
            result += tempChar + ' ';
        }
    }
    console.log(result)
}
charecterInRnage('#',':')
