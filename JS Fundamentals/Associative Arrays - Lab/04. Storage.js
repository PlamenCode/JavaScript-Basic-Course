function storage(input){
    let storage = {};

    for (const line of input) {
        let [item , quantity] = line.split(' ');

        if(!storage[item]){
            storage[item] = Number(quantity);
        } else{
            storage[item] += Number(quantity);
        }
    }

    for (const key in storage) {
        console.log(`${key} -> ${storage[key]}`);
        
    }
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])