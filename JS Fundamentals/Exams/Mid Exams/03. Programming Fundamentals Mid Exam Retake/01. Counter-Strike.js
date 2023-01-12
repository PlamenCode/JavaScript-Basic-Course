function cs(input){
    let index = 0;
    let energy = Number(input[index++]);
    let action = input[index++];
    let battlesWon = 0;
    let battleCount = 0;
    let isEnd = false;


    while(action !== 'End of battle'){
        let distance = Number(action);

        if(distance > energy){
            console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${energy} energy`);
            isEnd = true;
            break;
        }

        energy -= distance;
        battleCount++;
        battlesWon++;

        if(battleCount == 3){
            energy += battlesWon;
            battleCount = 0;
        }
        action = input[index++];
        
    }

    if(!isEnd){
    console.log(`Won battles: ${battlesWon}. Energy left: ${energy}`);
    }

}

cs(["100","10","10","10","1","3","73","10"])