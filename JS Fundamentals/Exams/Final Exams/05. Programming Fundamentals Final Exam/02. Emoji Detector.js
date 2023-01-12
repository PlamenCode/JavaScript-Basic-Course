function emojiDetector(input){
    let text = input.shift();
    let coolEmojis = [];
    let emojiCount = 0;
    let treshHold = 1;

    let patternNums = /\d/g;
    let patternEmoji = /([:]{2}|[*]{2})(?<emojiName>[A-Z][a-z]{2,})\1/g;

    let nums = text.match(patternNums);
    for (let digit of nums) {
        treshHold *= Number(digit);
    }
    
    
    let emojiMatches = text.matchAll(patternEmoji);
    for (let emojiMatch of emojiMatches) {
        emojiCount++;
        let emoji = emojiMatch[0];
        let emojiName =  emojiMatch.groups.emojiName;
        
        let coolnes = 0;
        for (let char of emojiName) {
            coolnes += char.charCodeAt(char)
        }
        if(coolnes > treshHold){
            coolEmojis.push(emoji)
        }
        
    }

    console.log(`Cool threshold: ${treshHold}`);
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
    console.log(coolEmojis.join('\n'));
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])