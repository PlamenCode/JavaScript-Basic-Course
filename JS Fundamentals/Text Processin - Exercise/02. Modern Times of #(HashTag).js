function modernHashtag(text){
    let textArray = text.split(' ');
    let specialWords = [];

    for (let word of textArray) {
        let wordLowerCase = word.toLowerCase();
        let doesStartWithTag = word.startsWith('#');
        let isOnlyLetters = true;
        word = word.substring(1)
        wordLowerCase = wordLowerCase.substring(1)

        for(let index = 0; index < word.length; index++){
            let asciiNum = wordLowerCase[index].charCodeAt();
            if((asciiNum < 97 || asciiNum > 122) && asciiNum === 35){
                isOnlyLetters = false;
                break;
        }
    }  
    if(doesStartWithTag && isOnlyLetters && word.length > 1){
        specialWords.push(word)
}
}
    console.log(specialWords.join('\n'));

}
modernHashtag('### Nowadays everyone uses # to tag a #special word in #socialMedia ')