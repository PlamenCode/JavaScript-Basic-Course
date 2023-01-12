function city(input){
    for (let key of Object.keys(input)) {
        console.log(`${key} -> ${input[key]}`);
    }
}
city({

    name: "Plovdiv",
    
    area: 389,
    
    population: 1162358,
    
    country: "Bulgaria",
    
    postCode: "4000"
    
    })