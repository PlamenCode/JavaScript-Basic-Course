function convertToObject(jsonInput){
    let inputObject = JSON.parse(jsonInput);
    for (const key of Object.keys(inputObject)) {
        console.log(`${key}: ${inputObject[key]}`);
        
    }

}
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}')