function stringSubstring(word, text){
    word = word.toLowerCase();
    let textArray = text.split(' ')
        .map(element =>{ return element.toLowerCase() })

        let isFound = false;
        let finalWord = ''

    for (let wordArr of textArray) {
        if(word == wordArr){
            isFound = true;
            finalWord = wordArr;
            break;
        }
    }

    if(isFound){
        console.log(finalWord);
    } else{
        console.log(`${word} not found!`);
    }
}
stringSubstring('python',
'JavaScript is the best programming language')
