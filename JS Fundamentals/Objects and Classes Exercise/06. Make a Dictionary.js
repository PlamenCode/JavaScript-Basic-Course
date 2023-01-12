function dictionary(input) {

    let dictionary = {};

    for (const elements of input) {
        let object = JSON.parse(elements);
        dictionary = Object.assign(dictionary, object);

    }
    let sortedKeys = Object.keys(dictionary);
    sortedKeys.sort((a, b) => a.localeCompare(b));

    for (const termin of sortedKeys) {
        let definition = dictionary[termin];
        console.log(`Term: ${termin} => Definition: ${definition}`);
    }

}

dictionary(['{"Coffee":"A hot drink made from the roasted and groundseeds (coffee beans) of atropical shrub."}',
    '{"Bus":"A large motor vehiclecarrying passengers by road,typically one serving the publicon a fixed route and for afare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold  or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves intoelectrical energy variations which may then be amplified,transmitted, or recorded."}'])