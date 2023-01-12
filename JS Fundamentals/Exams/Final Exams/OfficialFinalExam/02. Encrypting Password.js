function encryptedMessege(input){
    let n = Number(input.shift());
    let pattern = /([\W\S\D]{1,})>(?<num>[\d]{3})\|(?<lettersOne>[a-z]{3})\|(?<lettersTwo>[A-Z]{3})\|(?<symbols>[\W\S\D][\W\S\D][\W\S\D])<\1/g

    for(i = 0; i < n; i++){
        let currentComb = input[i];
        if(currentComb.match(pattern)){
            let match = pattern.exec(currentComb);
            let encryptedPass = ''
            let groupOne = match.groups.num;
            let groupTwo = match.groups.lettersOne;
            let groupThree = match.groups.lettersTwo;
            let groupFour = match.groups.symbols;
            
            encryptedPass = groupOne + groupTwo + groupThree + groupFour;
            console.log(`Password: ${encryptedPass}`);
        } else{
            console.log(`Try another password!`);
        }
    }

}
encryptedMessege(["3",
"##>00|no|NO|!!!?<###",
"##>123|yes|YES|!!!<##",
"$$<111|noo|NOPE|<<>$$"])
