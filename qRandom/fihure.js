function fugure(input){
    let value = Number(input[0])
    let buff = '';
    for(let i = 1 ; i <= value; i++){
        for(let a = 1; a <= value; a++){
            let star = '* ';
            if(a < value){
                buff += star;
            } else{
                buff += star + '\n' 
            }
        }
    }
   console.log(buff)
}
fugure(['4'])