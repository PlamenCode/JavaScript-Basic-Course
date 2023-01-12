function pascalSplit(text){
    text = text.split(/(?=[A-Z])/);
    console.log(text.join(', '));

}
pascalSplit('SplitMeIfYouCanHaHaYouCantOrYouCan')

function pascalSplit2(text){
    let result = '';
    let textArr = text.split('');

    for(let i = 0; i < textArr.length; i++){
        let currentChar = textArr[i];
        let nextChar = textArr[i + 1];
        let charUpperCase;
        let nextCharUpperCase;

        if(i < textArr.length - 1){
        charUpperCase = currentChar.toUpperCase();
        nextCharUpperCase = nextChar.toUpperCase();
        } else{
            charUpperCase = currentChar;
            nextCharUpperCase = nextChar;
        }

        if(currentChar == charUpperCase){
            result += currentChar;
        } else{
            if(nextChar == nextCharUpperCase){
                result += `${currentChar} `
            } else{
                result += currentChar;
            }
        }
    }
    console.log(result.split(' ').join(', '));
}
pascalSplit2('SplitMeIfYouCanHaHaYouCantOrYouCan')