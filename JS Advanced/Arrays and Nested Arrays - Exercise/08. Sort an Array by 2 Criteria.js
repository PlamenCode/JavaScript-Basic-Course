function sortBy2Criteria(arr){

    let sortedArray = arr.sort(sorting);

    function sorting(elementA, elementB){

        if(elementA.length == elementB.length){
            return elementA.localeCompare(elementB);
        } 
        return elementA.length - elementB.length;
    }
    console.log(sortedArray.join('\n'));

}

sortBy2Criteria(['alpha','beta','gamma']);
console.log('----------------');
sortBy2Criteria(['Isacc', 'Theodor','Jack', 'Harrison', 'George']);
console.log('----------------');
sortBy2Criteria(['test', 'Deny','omen', 'Default']);