function memoryGame(input){
    let elementSequance = input[0].split(' ');
    let index = 1;
    let command = input[index++];
    let numOfMoves = 0;

    while(command !== 'end'){
        numOfMoves++;

        let commands = command.split(' ');
        let firstElIndex = Number(commands[0]);
        let secondElIndex = Number(commands[1]);
        let firstEl = elementSequance[firstElIndex];
        let secondEl = elementSequance[secondElIndex];
        
        if(firstElIndex < 0 || secondElIndex < 0 || firstElIndex == secondElIndex || 
           firstElIndex > elementSequance.length -1 || secondElIndex > elementSequance.length -1){

            let startingIndexToAdd = elementSequance.length / 2;
            let elementToAdd ='-' + numOfMoves + 'a';
            
            elementSequance.splice(startingIndexToAdd, 0, elementToAdd);
            elementSequance.splice(startingIndexToAdd, 0, elementToAdd);
            console.log('Invalid input! Adding additional elements to the board');

        } else if( firstEl == secondEl){
            let removedEl = elementSequance.splice(firstElIndex , 1).join('');
            let secondElementIndex = elementSequance.indexOf(removedEl)
            let secondRemovedEl = elementSequance.splice(secondElementIndex, 1);
            console.log(`Congrats! You have found matching elements - ${firstEl}!`);

        } else if(firstEl !== secondEl){
            console.log(`Try again!`);
        }
        if(elementSequance.length == 0){
            console.log(`You have won in ${numOfMoves} turns!`);
            break;
        }
        if(command === 'end'){
            break;
        }
        command = input[index++];
    }
    if(command === 'end'){
        console.log('Sorry you lose :(');
        console.log(elementSequance.join(' '));
        
    }
}
memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0","-1 0","1 0", "1 0", "1 0", "end"])
memoryGame(["a 2 4 a 2 4", "0 3", "0 2","0 1","0 1", "end"])
    