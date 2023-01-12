function task2(input){
    let priceAbobe20 = Number(input[0]);
    let lugageKg = Number(input[1]);
    let daysToTravel = Number(input[2]);
    let numLugages = Number(input[3]);

    let priceBetven10And20 = priceAbobe20 / 2;
    let priceBelow10 = priceAbobe20 * 0.2;
    let price = 0;

    if(lugageKg < 10){
        price = priceBelow10;
    } else if( lugageKg >= 10 && lugageKg <= 20){
        price = priceBetven10And20;
    } else {
        price = priceAbobe20;
    }

    if(daysToTravel > 30){
        price += price * 0.1;
    } else if(daysToTravel >= 7 && daysToTravel <= 30){
        price += price * 0.15;
    } else if(daysToTravel < 7){
        price += price * 0.4;
    }
    price *= numLugages
    console.log(`The total price of bags is: ${price.toFixed(2)} lv.`);
}
task2(["25.50",
"5",
"36",
"6"])