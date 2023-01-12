function computerStore(input){
    let index = 0;
    let command = input[index++]
    let totalPrice = 0;
    let isNotSpecialOrReguler = true;

    while(isNotSpecialOrReguler){
        if(command === 'special' || command === 'regular'){
            isNotSpecialOrReguler = false;
            break;
        }
        let price = Number(command);
        if(price < 0){
            console.log('Invalid price!');
        } else {
            totalPrice += price;
        }
        command = input[index++];
    }

    let taxAmount = totalPrice * 0.2;
    let total = taxAmount + totalPrice

    if(command === 'special'){
        total *= 0.9; 
    } else{
        total = taxAmount + totalPrice;
    }
    if(total == 0){
        console.log('Invalid order!');
    } else {
console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${totalPrice.toFixed(2)}$
Taxes: ${taxAmount.toFixed(2)}$
-----------
Total price: ${total.toFixed(2)}$`);
}
}

computerStore(['1023','15','-20','-5.50','450','20','17.66','19.30','regular'])