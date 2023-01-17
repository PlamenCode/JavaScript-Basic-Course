function storeCatalog(input){
    let result = {};

    let sortedArr = input.sort((a,b) => a.localeCompare(b));

    for (const line of sortedArr) {
        const [product, price] = line.split(' : ');
        const currentLetter = product[0];
        let logLine = `${product}: ${price}`

        if(!result[currentLetter]){
            result[currentLetter] = [];
            result[currentLetter].push(logLine);
        } else{
            result[currentLetter].push(logLine);
        }
        
    }
    for (const key in result) {
       console.log(key);
       for (const element of result[key]) {
        console.log(`  ${element}`);
       }
    }
}
storeCatalog(
['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)