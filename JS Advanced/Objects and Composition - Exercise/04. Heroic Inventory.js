function heroicInventory(input){
    const result = [];

    for (const line of input) {
        const [name, level, items] = line.split(' / ');
        const itemArr = items.split(', ');
        
        const hero = {
            name,
            level: Number(level),
            items:itemArr
        }
        result.push(hero)
    }
    console.log(JSON.stringify(result));
}
heroicInventory(
['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)