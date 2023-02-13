class CarDealership {
    constructor(name){
        this.name = name
        this.totalIncome = 0;
        this.availableCars = []
        this.soldCars = []
    }

    addCar (model, horsepower, price, mileage){
        if(typeof(model) != 'string' || model.length < 1 
        || typeof(horsepower) != 'number' || horsepower < 0
        || typeof(price) != 'number' || price < 0
        || typeof(mileage) != 'number' || mileage < 0){
            throw new Error("Invalid input!");
        }

        let car = {
            model,
            horsepower,
            price,
            mileage
        }

        this.availableCars.push(car);
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    };

    sellCar (model, desiredMileage){
        let car = this.availableCars.find((currentCar) =>{
            if(currentCar.model == model){
                return currentCar;
            }
        });
        let price = 0;

        car.mileage = Number(car.mileage);
        car.price = Number(car.price);

        if(car.mileage <= desiredMileage){
            price += car.price;
        } else{
            let diff = Math.abs(car.mileage - desiredMileage);
            if(diff <= 40000){
                price += car.price * 0.95;
            } else if(diff > 40000){
                price += car.price * 0.9;
            }
        }

        let indexOfCar = this.availableCars.indexOf(car);
        let remove = this.availableCars.splice(indexOfCar, 1);

        let modelSold = remove[0].model;
        let hp = Number(remove[0].horsepower);
        
        let soldCar = {
            model: modelSold,
            horsePower: hp,
            soldPrice: price
        }
        if(!car){
            throw new Error(`${model} was not found!`);
        }

        this.totalIncome += price;
        this.soldCars.push(soldCar);
        return `${model} was sold for ${price.toFixed(2)}$`;

    };

    currentCar (){

        if(this.availableCars.length < 1){
            return "There are no available cars";
        }

        let result;
        result = '-Available cars:\n';
        

        for (const car of this.availableCars) {
            let length = this.availableCars.length;
            let index = this.availableCars.indexOf(car);
            if(index < length - 1){
                result += `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$\n`;
            } else{
                result += `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`;
            };
        }
        return result;
    };

    salesReport (criteria){
        if(criteria !== 'horsepower' || criteria == 'model'){
            throw new Error("Invalid criteria!");
        };

        let sortedArr = this.soldCars.sort((a,b) => {
            if (criteria == 'horsepower'){
                b.horsePower = Number(b.horsePower);
                a.horsePower = Number(a.horsePower);
                return b.horsePower - a.horsePower;
            }
            return a.model - b.model;
        })

        let result = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`;
        result += `-${sortedArr.length} cars sold:\n`;
        
        for (const car of sortedArr) {
            let length = sortedArr.length;
            let index = sortedArr.indexOf(car);
            car.horsePower = Number(car.horsePower);
            car.price = Number(car.price);
            if(index < length - 1){
                result += `---${car.model} - ${car.horsePower} HP - ${car.soldPrice.toFixed(2)}$\n`;
            } else{
                result += `---${car.model} - ${car.horsePower} HP - ${car.soldPrice.toFixed(2)}$`;
            };
        }
        return result
    };

}
let dealership = new CarDealership('SoftAuto');
console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
console.log(dealership.addCar('', 120, 4900, 240000));




