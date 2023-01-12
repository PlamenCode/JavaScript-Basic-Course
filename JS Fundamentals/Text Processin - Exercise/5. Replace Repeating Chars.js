function replaceRepeatingChar(input){
    let textArr = input.split('');
    let result = [];
    let lastChar = '';

    for (const char of textArr) {
        if(char !== lastChar){
            result.push(char);
            lastChar = char;
        } 
    }
    console.log(result.join(''));

}
replaceRepeatingChar('aaaaabbbbbcdddeeeedssaa')