function wordOccurrence(input){

    let words = {};

    for (let word of input) {

        if(!words[word]){
            words[word] = 1;
        } else{
            words[word] += 1;
        }
    }

    let sortedWords = Object.entries(words);
    sortedWords.sort((kvp1, kvp2) => kvp2[1] - kvp1[1]);

    for (const line of sortedWords) {
        console.log(`${line[0]} -> ${line[1]} times`);
        
    }

}
wordOccurrence(["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"])