function squareOfStars(num){

    let line = ''
    for(let i = 0; i < num; i++){
        for (let a = 0; a < num; a++) {
            line +=  "* "; 
        }
        line += '\n'
    }
    console.log(line);
}
squareOfStars(5)