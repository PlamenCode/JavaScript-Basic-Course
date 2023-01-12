function employees(list){

    let employee = {};

    for (const element of list) {
        let currentEmpNum = element.length;
        employee[element] = currentEmpNum;
    }
    for (let key in employee) {
        console.log(`Name: ${key} -- Personal Number: ${employee[key]}`)
        
    }

}
employees(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal'])