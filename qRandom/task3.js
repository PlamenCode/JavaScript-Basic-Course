function task3(input) {
    let num = Number(input[0]);
    let size = input[1];
    let getting = input[2];
    let price = 0;


    switch (size) {
        case '90X130': price = 110;
            if (num > 30 && num <= 60) {
                price *= 0.95;
                price = price * num;
            } else if (num > 60) {
                price *= 0.92;
                price = price * num;
            } break;
        case '100X150': price = 140;
            if (num > 40 && num <= 80) {
                price *= 0.94;
                price = price * num;
            } else if (num > 80) {
                price *= 0.9;
                price = price * num;
            } break;
        case '130X180': price = 190;
            if (num > 20 && num <= 50) {
                price *= 0.93;
                price = price * num;
            } else if (num > 50) {
                price *= 0.88;
                price = price * num;
            } break;
        case '200X300': price = 250;
            if (num > 25 && num <= 50) {
                price *= 0.91;
                price = price * num;
            } else if (num > 50) {
                price *= 0.86;
                price = price * num;
            } break;
    }

    if (getting === 'With delivery') {
        price += 60;
    }
    if (num > 99) {
        price *= 0.96;
    }
    if (num < 10) {
        console.log(`Invalid order`)
    } else {
        console.log(`${price.toFixed(2)} BGN`)
    }
}
task3(["2",
    "130X180",
    "With delivery"])