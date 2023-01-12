function order(product , quantity){
    let price = 0;
    switch(product){
        case 'coffee': price = 1.50; break;
        case 'snacks': price = 2.00; break;
        case 'water': price = 1.00; break;
        case 'coke': price = 1.40; break;
    }
    let total = (price * quantity).toFixed(2);
    return total;
}
let result = order('coffee', 2);
console.log(result)