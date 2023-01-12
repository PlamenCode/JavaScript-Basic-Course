function lift(input){
    let people = input[0];
    let liftSpaces = input[1].split(' ');
    let finalSpaces =[]

    for(let i = 0; i < liftSpaces.length; i++){
        if(people == 0){
            break;
        }
        let currentLiftSpace = liftSpaces[i];

        for(let j = currentLiftSpace; j < 4; j++){
            currentLiftSpace++;
            people--;
            if(people == 0){
                break;
            }
        }
        finalSpaces.push(currentLiftSpace);
    }
    if(liftSpaces.length > finalSpaces.length){
        let spacesNeeded = liftSpaces.length - finalSpaces.length
        for(let i = 1; i <= spacesNeeded; i++){
            finalSpaces.push(0);
        }
    }
    if(finalSpaces[finalSpaces.length - 1] < 4){
        console.log('The lift has empty spots!');
        console.log(`${finalSpaces.join(' ')}`);
    } else if(people > 0){
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(`${finalSpaces.join(' ')}`);
    } else{
        console.log(`${finalSpaces.join(' ')}`);
    }

}

lift(["15","0 0 0 0 0"])