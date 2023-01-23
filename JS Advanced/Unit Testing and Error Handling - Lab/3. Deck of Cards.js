function deckOfCards(arr){
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits = {
        S: '♠',
        H: '♥',
        D: '♦',
        C: '♣'
    }
    let cardsResultArray = []
    for (const cardComb of arr) {

        let cardEl= cardComb.split('');
        let cardSuit = cardEl.pop();
        let cardFace = cardEl.join('');

        if(!validFaces.includes(cardFace) || !validSuits[cardSuit]){
            console.log(`Invalid card: ${cardFace}${cardSuit}`);
        } 
           let card = cardFace + validSuits[cardSuit];
           cardsResultArray.push(card)
    }
    console.log(cardsResultArray.join(' '));

}
deckOfCards(['AS', '10D', 'KH', '2C'])
