function sortArr(arrNums,asOrDs){
    let finalResult;

    if(asOrDs == 'asc'){
       finalResult = ascending(arrNums)
    } else{
        finalResult = descending(arrNums)
    }
    
    function ascending(array){
        let result = array.sort((a,b) => a - b);
        return result;

    }

    function descending(array){
        let result = array.sort((a,b) => b - a);
        return result;
    }

    return finalResult;

}
sortArr([14, 7, 17, 6, 8], 'asc')