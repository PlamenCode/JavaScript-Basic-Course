function sortArray2criteria(input){
    let sortedArray = input.sort((a,b) =>{
        return a.length - b.length || a.localeCompare(b)
    });
    console.log(sortedArray.join('\n'));
}
sortArray2criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])