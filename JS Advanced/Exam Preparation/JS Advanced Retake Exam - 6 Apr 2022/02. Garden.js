class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable
        this.plants = []
        this.storage = []
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.");
        }

        let currentPlant = {
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        }
        this.plants.push(currentPlant);
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity) {
        let plant = this.plants.find((plant) => {
            if (plant.plantName == plantName) { return plant; }
        });

        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (plant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }

        plant.quantity += quantity;

        if (!plant.ripe) {
            plant.ripe = true;
            if (quantity == 1) {
                return `${quantity} ${plantName} has successfully ripened.`;
            }
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    };

    harvestPlant(plantName){
        let plant = this.plants.find((plant) => {
            if (plant.plantName == plantName) { 
                return plant; }
        });

        if(!plant){
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        
        if(!plant.ripe){
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }
        

        let indexOfEl = this.plants.indexOf(plant)
        let el = this.plants.splice(indexOfEl, 1);

        this.spaceAvailable += plant.spaceRequired;
        let currentPlant ={
            plantName: plant.plantName,
            quantity: plant.quantity
        }
        this.storage.push(currentPlant);
        return `The ${plantName} has been successfully harvested.`

    };

    generateReport(){
        let result = '';
        result += `The garden has ${this.spaceAvailable} free space left.\n`;
        let plantNamesArr = [];
        this.plants.forEach(el => {
            let name = el.plantName;
            plantNamesArr.push(name);
        });
        plantNamesArr.sort((a,b) => a.localeCompare(b));
        result += `Plants in the garden: ${plantNamesArr.join(', ')}\n`;

        if(this.plants.storage < 1){
            return `Plants in storage: The storage is empty.`;
        } 
        let storageArr = [];
        this.storage.forEach(el => {
            let name = el.plantName;
            let quantity = el.quantity;
            storageArr.push(`${name} (${quantity})`);
        });
         result += `Plants in storage: ${storageArr.join(', ')}`;
        return result
    };
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());





