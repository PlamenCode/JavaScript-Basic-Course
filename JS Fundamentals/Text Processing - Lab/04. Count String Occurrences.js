function countStringOccurences(sentence, wordCheck){
    let sentenceArray = sentence.split(' ');
    let count = 0;

    for (const word of sentenceArray) {
        if(word == wordCheck){
            count++;
        }
    }
    console.log(count);
}
countStringOccurences('This is a word and it also is a sentence',

'is')