function juiceFlavors(input){
    let juice = {};
    let bottles = {};
    
    for (const line of input) {
        let [fruit, quantity] = line.split(' => ');
        quantity = Number(quantity);
    
        if(!juice[fruit]){
            juice[fruit] = 0;
        }
        juice[fruit] += quantity;

        if(juice[fruit] >= 1000){
            if(!bottles[fruit]){
                bottles[fruit] = 0;
            }
            while(juice[fruit] >= 1000){
                bottles[fruit]++;
                juice[fruit] -= 1000;
            }
        }
    }

    for (const key in bottles) {
        console.log(`${key} => ${bottles[key]}`);
    }
}

juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])

juiceFlavors(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549'])