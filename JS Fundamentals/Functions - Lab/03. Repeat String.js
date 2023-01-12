function repeatedString(string , count){
    let result = '';
    for(let i = 1; i <= count; i++){
        result += string;
    }
    return result;
}
let result = repeatedString('ha',3);
console.log(result);