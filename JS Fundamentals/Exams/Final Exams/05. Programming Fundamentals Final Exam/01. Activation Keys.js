function activationKey(input){
    let activationKey = input.shift();
    let index = 0;
    let command = input[index++];

    while(command != 'Generate'){
        let line = command.split('>>>');
        let action = line.shift();

        switch(action){
            case 'Contains':
                let subStrContain = line.shift();
                if(activationKey.includes(subStrContain)){
                    console.log(`${activationKey} contains ${subStrContain}`);
                } else{
                    console.log('Substring not found!');
                }
            break;

            case 'Flip':
                let casing = line.shift();
                let startIndex = line.shift();
                let endIndex = line.shift();
                let part = activationKey.substring(startIndex, endIndex);
                let newPart = casing == 'Upper' ? part.toUpperCase() : part.toLowerCase();
                activationKey = activationKey.replace(part, newPart);
                console.log(activationKey);
            break;

            case 'Slice':
                let startIndex2 = line.shift();
                let endIndex2 = line.shift();
                let deletedPart = activationKey.substring(startIndex2, endIndex2);
                activationKey = activationKey.replace(deletedPart, '');
                console.log(activationKey);
            break;

        }

        command = input[index++];
    }
    console.log(`Your activation key is: ${activationKey}`);

}

activationKey(["134softsf5ftuni2020rockz42",

"Slice>>>3>>>7",

"Contains>>>-rock",

"Contains>>>-uni-",

"Contains>>>-rocks",

"Flip>>>Upper>>>2>>>8",

"Flip>>>Lower>>>5>>>11",

"Generate"])