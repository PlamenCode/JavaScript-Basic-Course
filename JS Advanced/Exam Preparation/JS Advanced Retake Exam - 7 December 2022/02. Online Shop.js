class OnlineShop{
    constructor(warehouseSpace){
        this.warehouseSpace = warehouseSpace
        this.products = []
        this.sales = []
    }

    loadingStore(product, quantity, spaceRequired){
        if(this.warehouseSpace < spaceRequired){
            throw new Error("Not enough space in the warehouse.");
        };

        let productAdd = {
            product: product,
            quantity: quantity
        }
        this.products.push(productAdd);
        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`;
    };

    quantityCheck(product, minimalQuantity){
        let productCatalog = this.products.find((a) =>{
            if(a.product == product){
                return a;
            }
            return false;
        });

        if(!productCatalog){
            throw new Error(`There is no ${product} in the warehouse.`);
        };
        if(minimalQuantity <= 0){
            throw new Error("The quantity cannot be zero or negative.");
        };

        if(minimalQuantity <= productCatalog.quantity){
            return `You have enough from product ${product}.`;
        };

        let diff = minimalQuantity - productCatalog.quantity;
        productCatalog.quantity = minimalQuantity;
        return `You added ${diff} more from the ${product} products.`;
    };

    sellProduct(product) {
        let productCatalog = this.products.find((a) =>{
            if(a.product == product){
                return a;
            }
            return false;
        });

        if(!productCatalog){
            throw new Error(`There is no ${product} in the warehouse.`);
        };
        let soldProduct = {
            product: product,
            quantity: 1
        };
        productCatalog.quantity -= 1;
        this.sales.push(soldProduct);

        return `The ${product} has been successfully sold.`;
    };

    revision(){
        if(this.sales.length < 1){
            throw new Error("There are no sales today!");
        };

        let result = `You sold ${this.sales.length} products today!\n`;
        result += `Products in the warehouse:\n`;

        this.products.forEach(x => {
            result += `${x.product}-${x.quantity} more left\n`;
        })

        return result.trim();
    };

}