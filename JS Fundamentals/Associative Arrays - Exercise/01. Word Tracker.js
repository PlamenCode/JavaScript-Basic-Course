function wordTracker(input){
    let wordsToTrack = input.shift().split(' ');
    let words = {};

    for (let word of wordsToTrack) {
        words[word] = 0;
    }
 
    for (let word of input) {
        if(words.hasOwnProperty(word)){
            words[word] += 1;
        }
    }
    let sortedWords = Object.entries(words);
    sortedWords.sort((kvp1, kvp2) => kvp2[1] - kvp1[1])

    for (const line of sortedWords) {
        console.log(`${line[0]} - ${line[1]}`);
    }

}
wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task' 
])