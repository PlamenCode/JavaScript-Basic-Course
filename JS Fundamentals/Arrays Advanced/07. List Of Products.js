function listOfProducts(arr){
    let sortedList = arr.sort();

    for(let i = 0; i < sortedList.length; i++){
        let number = i + 1
        let product = sortedList[i];
        console.log(`${number}.${product}`);
    }
}
listOfProducts(['Watermelon', 'Banana', 'Apples'])