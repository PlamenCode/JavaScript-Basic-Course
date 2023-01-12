function train(input){
    let arrWagons = input.shift().split(' ').map(Number);
    let maxWagonSpace = Number(input.shift());

    for(let i = 0; i < input.length; i++){

        let command = input[i].split(' ');
      
        if(command.length > 1){
            arrWagons.push(Number(command[1]));
        } else{
            let number = Number(command);

            for(let j = 0; j < arrWagons.length; j++){
                let currentWagonPass = Number(arrWagons[j]);
                if(currentWagonPass + number <= maxWagonSpace){
                    arrWagons[j] += number;
                    break;
                }
            }
        }
        
    }
    console.log(arrWagons.join(' '));
    
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])