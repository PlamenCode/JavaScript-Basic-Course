function negPosNum(input){
    const result = [];

    for (const element of input) {
        if(element >= 0){
            result.push(element)
        } else{
            result.unshift(element)
        }
    }
    console.log(result.join('\n'));

}
negPosNum([7, -2, 8, 9]);
negPosNum([3, -2, 0, -1]);