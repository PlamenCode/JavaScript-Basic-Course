function passwordValidator(password){
    let passDigitCount = 0;
    let lengthPass = password.length;
    let isSymbol = false;
    for(let i = 0; i < lengthPass; i++){
        let elementAscllNum = password[i].charCodeAt();
        let isDigit = elementAscllNum >= 48 && elementAscllNum <= 57;
        let isSmallLetter = elementAscllNum >= 97 && elementAscllNum <= 122;
        let isBigLetter = elementAscllNum >= 65 && elementAscllNum <= 90;

        if(isDigit){
            passDigitCount++;
        }
        if(!isDigit && !isBigLetter && !isSmallLetter){
            isSymbol = true;
        }
    }
    if(lengthPass < 6 || lengthPass > 10){
        console.log('Password must be between 6 and 10 characters');
    }
    if(isSymbol){
        console.log('Password must consist only of letters and digits');
    }
    if(passDigitCount < 2){
        console.log('Password must have at least 2 digits');
    }
    if(passDigitCount > 2 && !isSymbol && (lengthPass >= 6 && lengthPass <= 10)){
        console.log('Password is valid');
    }
}
passwordValidator('abc')