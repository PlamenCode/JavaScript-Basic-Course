function cookingByNums(...arr){
    let resultNum = Number(arr.shift());

    for (let action of arr) {
        switch(action){
            case 'chop':
                resultNum /= 2;
                break;
            case 'dice':
                resultNum = Math.sqrt(resultNum);
                break;
            case 'spice':
                resultNum++;
                break;
            case 'bake':
                resultNum *= 3;
                break;
            case 'fillet':
                resultNum -= resultNum * 0.2;
                break;
        }
        console.log(resultNum);
        
    }

}
cookingByNums('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingByNums('9', 'dice', 'spice', 'chop', 'bake', 'fillet')