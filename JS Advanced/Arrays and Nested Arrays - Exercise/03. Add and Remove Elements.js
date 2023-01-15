function addRemoveEl(arr){
    let result = [];
    let num = 0;

    for(let i = 0; i < arr.length; i++){
        num++;
        if (arr[i] == 'add'){
            result.push(num);
        } else if(arr[i] == 'remove'){
            result.pop();
        }
    }
    if(result.length){
        console.log(result.join('\n'));
    } else{
        console.log('Empty');
    }

}
addRemoveEl(['add','add','add','add'])
addRemoveEl(['add', 'add', 'remove', 'add', 'add'])