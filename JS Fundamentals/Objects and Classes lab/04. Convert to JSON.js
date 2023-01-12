function convertToJson(firstName, lastName, hairColour){
    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColour
    }
    let personJson = JSON.stringify(person);
    console.log(personJson);

}
convertToJson('Peter', 'Smith','Blond')