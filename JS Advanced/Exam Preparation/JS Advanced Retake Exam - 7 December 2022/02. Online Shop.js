class OnlineShop{
    constructor(warehouseSpace){
        this.warehouseSpace = warehouseSpace
        this.products = []
        this.sales = []
    }

    loadingStore(product, quantity, spaceRequired){
        if(spaceRequired > this.warehouseSpace){
            throw new Error('Not enough space in the warehouse.');
        }
        this.products.push([product,quantity]);
        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity){
        if(minimalQuantity <= 0 ){
            throw new Error("The quantity cannot be zero or negative.");
        }
        let isFound = false;
        for (const productArr of this.products) {
            if(productArr[0] == product){
                isFound = true;
                if(minimalQuantity <= Number(productArr[1])){
                    return `You have enough from product ${product}.`;
                }
                let difference = minimalQuantity - productArr[1];
                productArr[1] = minimalQuantity;
            
                return `You added ${difference} more from the ${product} products.`
            }
        }

        if(!isFound){
            throw new Error(`There is no ${product} in the warehouse.`)
        }
    }

    sellProduct(product){
        let isFound = false;
        for (const productArr of this.products) {
            if(productArr[0] == product){
                isFound = true;
                productArr[1]--;

                
                let soldProductArr = [product,1];
                this.sales.push(soldProductArr);

                return `The ${product} has been successfully sold.`
            }
        }

        if(!isFound){
            throw new Error(`There is no ${product} in the warehouse.`)
        }
    } 

    revision(){
        if(this.sales.length <= 0){
            throw new Error('There are no sales today!');
        }
        let result = '';

        let sales = 0;
        for (const sold of this.sales) {
            sales += sold[1];  
        }
        result += `You sold ${sales} products today!\n`;
        result += `Products in the warehouse:\n`;
        for (const product of this.products) {
            result += `${product[0]}-${product[1]} more left\n`
        }
        return result;   
    }
}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());