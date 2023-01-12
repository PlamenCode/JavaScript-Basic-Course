function passwordReset(input){
    let password = input.shift();

    let command = input.shift();

    while(command != 'Done'){
        let line = command.split(' ');
        let action = line.shift();

        switch(action){
            case 'TakeOdd':{
                let passArr = password.split('');
                let newPass = [];
                for (let i = 1; i <= passArr.length; i++) {
                    if(i % 2 !== 0){
                    newPass.push(passArr[i]);
                    }
                }
                password = newPass.join('');
                console.log(password);

                break;
            }

            case 'Cut':{
                let index = Number(line.shift());
                let length = Number(line.shift());
                let subStr = password.substring(index, index + length);
                password = password.replace(subStr, '');
                console.log(password);
                break;
            }

            case 'Substitute':{
                let subStr = line.shift();
                let substitude = line.shift();
                if(password.includes(subStr)){
                    while(password.includes(subStr)){
                        password = password.replace(subStr, substitude);
                    }
                    console.log(password);
                } else {
                    console.log('Nothing to replace!');
                }
                break;
            }

        }
        command = input.shift();
    }
    console.log(`Your password is: ${password}`);
}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])