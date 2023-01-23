function playingCrads(face, suit){
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits = {
        S: '♠',
        H: '♥',
        D: '♦',
        C: '♣'
    }
    if(!validFaces.includes(face) || !validSuits[suit]){
        throw new Error;
    } 

        let card = {
            face,
            suit,
            toString(){
                console.log(this.face + validSuits[this.suit]);
            }
        };
        return card;

}
let card = playingCrads('A', 'S');
card.toString();