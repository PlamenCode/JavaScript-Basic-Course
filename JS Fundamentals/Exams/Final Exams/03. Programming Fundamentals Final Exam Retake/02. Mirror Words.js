function mirrorWords(input){
    let text = input.shift();
    let count = 0;
    let mirrorWordsCount = 0
    let pattern = /([@#]{1})(?<firstWord>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/g;
    let result = [];

    let matches = text.matchAll(pattern);
    for (const match of matches) {
        count++

        let firstWord = match.groups.firstWord;
        let secondWord = match.groups.secondWord;
        let reversedSecondWord = secondWord.split('').reverse().join('');

        if(firstWord == reversedSecondWord){
            mirrorWordsCount++;
            let mirrorCombo = `${firstWord} <=> ${secondWord}`;
            result.push(mirrorCombo)
        }
    }
    if(count > 0) { console.log(`${count} word pairs found!`); } 
    else { console.log('No word pairs found!'); }
    
    if(mirrorWordsCount < 1) { console.log('No mirror words!'); }
    else{ console.log(`The mirror words are: \n${result.join(', ')}`);}
    
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
    )