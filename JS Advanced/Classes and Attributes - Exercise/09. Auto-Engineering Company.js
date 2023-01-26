function carCompany(input){
    let mapCars = new Map();

    for (const line of input) {
        let [brand, model, quantity] = line.split(' | ');

        if(!mapCars.has(brand)){
            mapCars.set(brand,new Map());
        }

        let mapModels = mapCars.get(brand);
        if(!mapModels.has(model)){
            mapModels.set(model, 0)
        }
        mapModels.set(model, mapModels.get(model) + Number(quantity));
    }

    for (const brand of mapCars.keys()) {
        console.log(brand);
        let mapModels = mapCars.get(brand);
        for (const model of mapModels.keys()) {
            console.log(`###${model} -> ${mapModels.get(model)}`);
        }
    }
}

carCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])