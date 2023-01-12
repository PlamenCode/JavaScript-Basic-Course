function taxCalculation(input){
    let carsArray = input.toString().split('>>');
    let arrayLength = carsArray.length;
    let totalTaxesCollected = 0;

    let Combination = carsArray.shift().split(' ');


    for(let i = 0; i < arrayLength; i++){
        let carType = Combination.shift();
        let yearsInUse = Number(Combination.shift());
        let kmTravelled = Number(Combination.shift());

        let isValid = true;
        let totalTax = 0;
        let initialTax = 0;

        switch(carType){
            case 'family': initialTax = 50;
            initialTax -= 5 * yearsInUse;
            while(kmTravelled >= 3000){
                totalTax += 12;
                kmTravelled -= 3000;}
            totalTax += initialTax ;
            break;

            case 'heavyDuty': 
            initialTax = 80;
            initialTax -= 8 * yearsInUse;
            while(kmTravelled >= 9000){
                totalTax += 14;
                kmTravelled -= 9000;}
            totalTax += initialTax;
            break;

            case 'sports': 
            initialTax = 100; 
            initialTax -= 9 * yearsInUse;
            while(kmTravelled >= 2000){
                totalTax += 18;
                kmTravelled -= 2000;
            }
            totalTax += initialTax;
            break;

            default:
            console.log('Invalid car type.');
            isValid = false;
            break;
        }

        totalTaxesCollected = totalTaxesCollected + totalTax;

        if(isValid){
        console.log(`A ${carType} car will pay ${totalTax.toFixed(2)} euros in taxes.`);
       
        }
        if(carsArray.length > 0){
        Combination = carsArray.shift().split(' ');
        } else{
            break;
        }
    }

    console.log(`The National Revenue Agency will collect ${totalTaxesCollected.toFixed(2)} euros in taxes.`);
    
}

taxCalculation(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410'])