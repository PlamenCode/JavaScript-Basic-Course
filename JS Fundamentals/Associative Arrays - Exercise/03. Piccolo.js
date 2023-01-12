function picolo(input) {
    let parking = {};

    for (const line of input) {
        let [place, carNum] = line.split(', ');

        if (place == 'IN') {
            parking[carNum] = 1;
        } else {
            delete parking[carNum];
        }
    }

    let spaces = Object.keys(parking).length;
    if (spaces > 0) {
        let sortedCars = Object.entries(parking);
        sortedCars.sort((a, b) => a[0].localeCompare(b[0]));
        for (const car of sortedCars) {
            console.log(car[0]);
        }
    } else {
        console.log('Parking Lot is Empty');
    }

}

picolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU',
])