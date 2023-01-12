function censoredWord(string, wordToCheck){
    let strArray = string.split(' ');
    let result = [];

    for (const word of strArray) {
        if(word == wordToCheck){
            let length = word.length;
            let censor = '*'.repeat(length);
            result.push(censor)
        } else{
            result.push(word)
        }
    }
    console.log(result.join(' '));
}
censoredWord('Find the hidden word', 'hidden')