function palindromeInteger(numsArray){
    for(let i = 0; i < numsArray.length; i++){
        let num = numsArray[i].toString();
        let num2 = ''
        for(let a = num.length - 1; a >= 0; a--){
            num2 += num[a];
        }
        if(num == num2){
            console.log('true')
        } else{
            console.log('false');
        }
    }
}
palindromeInteger([32,2,232,1010])