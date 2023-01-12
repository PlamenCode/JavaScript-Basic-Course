function furniture(text){
    let pattern = />>(?<product>[A-Za-z]+)<<(?<price>[\d]+[\.]*[\d]+)!(?<quantity>[\d]+)/g;
    let index = 0;
    let totalMoney = 0;

    console.log('Bought furniture');
    while(text[index] !== 'Purchase'){

        let row = text[index];
        let validProduct = pattern.exec(row);

        if(validProduct !== null){
            let productName = validProduct.groups['product'];
            console.log(productName);
            let productPrice = validProduct.groups['price'];
            let productQuantity = validProduct.groups['quantity'];

            totalMoney += productPrice * productQuantity;   
            validProduct = pattern.exec(row);
        }

        index++;
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}

furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase'])