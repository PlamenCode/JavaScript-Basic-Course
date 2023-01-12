function shootForTheWin(input){
    let array = input[0].split(' ').map(Number);
    let index = 1;
    let command = input[index++];
    let count = 0;


    while(command !== 'End'){
        let targetIndex = Number(command);
    
        if(targetIndex >= 0 && targetIndex < array.length){
            for(let i = 0; i < array.length; i++){
                let currentTarget = array[targetIndex];

                if(i !== targetIndex && array[i] !== -1){
                    if(array[i] > currentTarget){
                        array[i] -= currentTarget;
                    } else {
                        array[i] += currentTarget;
                    }
                }
            }
            array[targetIndex] = -1;
            count++;
        }
        command = input[index++];
    }

    console.log(`Shot targets: ${count} -> ${array.join(' ')}`);

}

shootForTheWin(["24 50 36 70","0","4","3","1","End"])
