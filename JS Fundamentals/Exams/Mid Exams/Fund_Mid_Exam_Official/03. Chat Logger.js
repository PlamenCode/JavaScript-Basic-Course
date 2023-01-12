function chatLogger(input){
    let index = 0;
    let command = input[index++];

    let result = [];

    while(command !== 'end'){
        command = command.split(' ');
        let action = command[0];


        switch(action){
            case 'Chat':
                let messege = command[1];
                result.push(messege);
                break;

            case 'Delete':
                let messegeDel = command[1];
                let isIncluded = result.includes(messegeDel);
                if(isIncluded){
                    let indexOfDelMessege = result.indexOf(messegeDel);
                    result.splice(indexOfDelMessege, 1);
                }
                break;

            case 'Edit':
                let messegeEdit = command[1];
                let edittedMessege = command[2];
                let doesExist = result.includes(messegeEdit)
                if(doesExist){
                    let indexM = result.indexOf(messegeEdit)
                    result.splice(indexM,1,edittedMessege)
                }
                break;
            
            case 'Pin':
                let messegePin = command[1];
                let exist = result.includes(messegePin);
                if(exist){
                    let indexOfPin = result.indexOf(messegePin);
                    let pinnedMessege = result.splice(indexOfPin,1).toString();
                    result.push(pinnedMessege);
                }
                break;

            case 'Spam':
                let length = command.length;
                for(let i = 1; i < length; i++){
                    let sms = command[i];
                    result.push(sms);
                }
                break;
        }
        command = input[index++];
    }

    for(let i = 0; i < result.length; i++){
        console.log(result[i]);
    }


}
// chatLogger(["Chat Hello",
// "Chat darling",
// "Edit darling Darling",
// "Spam how are you",
// "Delete Darling",
// "end"])
chatLogger(["Chat John",
"Spam Let's go to the zoo",
"Edit zoo cinema",
"Chat tonight",
"Pin John",
"end"])

