function matchPhoneNum(numbers){
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;

    let phoneNums = [];
    while((validNums = pattern.exec(numbers)) !== null){
        phoneNums.push(validNums[0]);
    }
    console.log(phoneNums.join(', '));
}
matchPhoneNum(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])