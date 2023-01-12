function thePianist(input){
    let numOfPieces = Number(input.shift());
    let result = {};
    
    for(let i = 0; i < numOfPieces; i++){
        let line = input.shift();
        let [piece, composer, key] = line.split('|');
        result[piece] = [composer, key];
    }
    
    let command = input.shift();

    while (command != 'Stop') {
        let line = command.split('|');
        let action = line.shift();

        switch(action){
            case 'Add':{
                let piece = line.shift();
                let composer = line.shift();
                let key = line.shift();
                if(!result[piece]){
                    result[piece] = [composer, key];
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                } else{
                    console.log(`${piece} is already in the collection!`);
                }
            break;
            }

            case 'Remove':{
                let removePiece = line.shift();
                if(result[removePiece]){
                    delete result[removePiece]
                    console.log(`Successfully removed ${removePiece}!`);
                } else{
                    console.log(`Invalid operation! ${removePiece} does not exist in the collection.`);
                }
                break;
            }

            case 'ChangeKey':{
                let piece = line.shift();
                let newKey = line.shift();
                if(result[piece]){
                    result[piece][1] = newKey;
                    console.log(`Changed the key of ${piece} to ${newKey}!`);
                } else{
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
            }   
        }
       command = input.shift();
    }

    let finalResult = Object.entries(result);
    
    for (let line of finalResult) {
        let piece = line.shift();
        let [composer, key] = line.shift();
        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
        
    }
    
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop',
])