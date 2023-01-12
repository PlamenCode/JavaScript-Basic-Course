function needForSpeed(input){
    let numOfCars = Number(input.shift());
    let cars = {};

    for(let i = 0 ; i < numOfCars; i++){
        let [car, mileage, fuel] = input.shift().split('|');
        cars[car] = {
            mileage: Number(mileage),
            fuel: Number(fuel)
        }
    }

    let command = input.shift();

    while(command != 'Stop'){
        let line = command.split(' : ');
        let action = line.shift();

        switch(action){
            case 'Drive':{
                let carTD = line.shift();
                let distance = Number(line.shift());
                let fuelNeeded = Number(line.shift());
                if(cars[carTD].fuel < fuelNeeded){
                    console.log('Not enough fuel to make that ride');
                } else{
                    cars[carTD].fuel -= fuelNeeded;
                    cars[carTD].mileage += distance;
                    console.log(`${carTD} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`);
                }
                if(cars[carTD].mileage > 100000){
                    delete cars[carTD];
                    console.log(`Time to sell the ${carTD}!`);
                }
            break;
        }

        case 'Refuel':{
            let carTF = line.shift();
            let fuelToPump = Number(line.shift());
            cars[carTF].fuel += fuelToPump;
            if (cars[carTF].fuel > 75) {
                let fuelOver = cars[carTF].fuel - 75;
                let fuelPumped = fuelToPump - fuelOver;
                cars[carTF].fuel = 75;
                console.log(`${carTF} refueled with ${fuelPumped} liters`);
            } else{
                console.log(`${carTF} refueled with ${fuelToPump} liters`);

            }
            break;
        }

        case 'Revert':{
            let carTDec = line.shift();
            let mileageTD = Number(line.shift());

            cars[carTDec].mileage -= mileageTD;
            if(cars[carTDec].mileage < 10000){
                cars[carTDec].mileage = 10000;
            } else{
                console.log(`${carTDec} mileage decreased by ${mileageTD} kilometers`);
            }
            break;
        }

    }
    command = input.shift();
  }

  let carsResult = Object.entries(cars);

  for (let car of carsResult) {
    let carName = car[0];
    let mileage = car[1].mileage;
    let carFuel = car[1].fuel;
    console.log(`${carName} -> Mileage: ${mileage} kms, Fuel in the tank: ${carFuel} lt.`);
  }

}
needForSpeed ([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'])