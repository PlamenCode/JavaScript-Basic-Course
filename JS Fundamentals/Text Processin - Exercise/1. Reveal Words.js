function revealWord(corectWords, text){

    let words = corectWords.split(', ');
    let textArray = text.split(' ');

    for(let word of words) {
        let match = '*'.repeat(word.length);
        for (let element of textArray) {
            let index = textArray.indexOf(element)
            if(match === element){
                textArray[index] = word
            }
        }
    }
    
    console.log(textArray.join(' '))

}
revealWord('great, learning', 
'softuni is ***** place for ******** new programming languages')