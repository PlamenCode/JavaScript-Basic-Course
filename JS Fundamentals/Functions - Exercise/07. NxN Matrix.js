function matrix(num){
    let row = '';
    for(let i = 1; i <= num; i++){
        row += num + ' '; 
    }
    for(let coll = 1; coll <= num; coll++){
        
        console.log(row);
    }
    
}
matrix(3) 


function matrix2(num){
    function row(){
        let singleRow = '';
        for(let i = 1; i <= num; i++){
            singleRow += `${num} `; 
        }
    return singleRow;
    }
    for(let i = 1; i <= num; i++){
        console.log(row());
    }
}
matrix2(3)