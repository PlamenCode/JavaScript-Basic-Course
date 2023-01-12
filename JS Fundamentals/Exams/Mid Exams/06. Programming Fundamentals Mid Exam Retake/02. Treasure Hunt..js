function treasureHunt(input){
    let tresure = input.shift().split('|');
    
    let index = 0;
    let command = input[index++];
    let stolenLoot = [];

    while(command !== 'Yohoho!'){
        command = command.split(' ');
        let action = command.splice(0,1).toString();
        let isIncluded = false;

        switch(action){
            case 'Loot':
                let length = command.length;
                for(let i = 0; i < length;i++){
                    let loot = command[i];
                    isIncluded = tresure.includes(loot);
                    if(!isIncluded){
                        tresure.unshift(loot);
                    }
                }; break;

            case 'Drop':
                let indexCom = Number(command[0]) 
                if(indexCom >= 0){
                let validIndex = tresure.length - 1;
                if(indexCom <= validIndex && indexCom >= 0){
                    let removedLoot = tresure.splice(indexCom,1).toString();
                    tresure.push(removedLoot);
                }}; break;

            case 'Steal':
                let stealCount = Number(command[0]);
                let lastIndex = tresure.length - 1;
                let indexToSteal = (lastIndex - stealCount >= 0) ? (lastIndex - stealCount): 0;
                for(let i = lastIndex; i > indexToSteal; i--){
                    let stolenLootItem = tresure.splice(i,1).toString();
                    stolenLoot.unshift(stolenLootItem);
                }
                console.log(`${stolenLoot.join(', ')}`); 
                break;
        }
        command = input[index++];
    }

    if(tresure.length < 1){
        console.log('Failed treasure hunt.');
    } else{
        let sum = 0;
        for(let i = 0; i < tresure.length; i++){
            let element = tresure[i].toString();
            let elementLength = element.length;
            sum += elementLength;
        }
        let avg = sum / tresure.length;
        console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
    }
}
// treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
// "Loot Wood Gold Coins","Loot Silver Pistol","Drop 3","Steal 3","Yohoho!"])

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal","Drop -1","Drop 1","Steal 6","Yohoho!"])

