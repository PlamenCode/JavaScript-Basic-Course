function storeProvision(inStock, delivered){

    let stockItems = {};

    for(let i = 0; i < inStock.length; i+=2){
        let currentProduct = inStock[i];
        stockItems[currentProduct] = Number(inStock[i + 1]);
    }

    for(let i = 0; i < delivered.length; i+=2){
        let currentProduct = delivered[i];

        if(!stockItems.hasOwnProperty(currentProduct)){
            stockItems[currentProduct] = 0;
        }
        stockItems[currentProduct] += Number(delivered[i + 1]);
    }

    for (const key in stockItems) {
        console.log(`${key} -> ${stockItems[key]}`);
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas','14', 'Pasta', '4', 'Beer', '2'],
               ['Flour', '44', 'Oil', '12', 'Pasta', '7','Tomatoes', '70', 'Bananas', '30'])