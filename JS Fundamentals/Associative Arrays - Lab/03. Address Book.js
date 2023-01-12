function adressBook(input) {
    let adressBook = {};

    for (const line of input) {
        let [name, adress] = line.split(':')
        adressBook[name] = adress;   
    }
    let sortedAdressBook = Object.entries(adressBook);
    sortedAdressBook.sort((kvp1, kvp2) => kvp1[0].localeCompare(kvp2[0]))

    for (const line of sortedAdressBook) {
        console.log(`${line[0]} -> ${line[1]}`);
    }

}
adressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])