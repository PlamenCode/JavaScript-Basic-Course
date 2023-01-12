function softUniBarIncome(input){
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9]+)\|[^0-9\|$%.]*(?<price>[0-9\.]+)\$/g;
    let totalIncome = 0;

    let command = input.shift();

    while(command !== 'end of shift'){

        let info = pattern.exec(command);

        if(info){
            let customer = info.groups['name'];
            let product = info.groups['product'];
            let count = Number(info.groups['count']);
            let price = Number(info.groups['price']);

            let currentCost = price * count;
            totalIncome += currentCost;

            console.log(`${customer}: ${product} - ${currentCost.toFixed(2)}`);

            command = input.shift();
            info = pattern.exec(command);
        } else {
            command = input.shift();
        }

    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);


}
softUniBarIncome(['%George%<Croissant>|2|10.3$',

'%Peter%<Gum>|1|1.3$',

'%Maria%<Cola>|1|2.4$',

'end of shift'])