function companyUsers(input) {
    let companies = {};

    for (const line of input) {
        let [companyName, userId] = line.split(' -> ');

        if (companies.hasOwnProperty(companyName)) {
            let exists = companies[companyName].includes(userId);

            if (!exists) {
                companies[companyName].push(userId)
            }

        } else {
            companies[companyName] = [];
            companies[companyName].push(userId)
        }
    }

    let sortedCopmany = Object.entries(companies);
    sortedCopmany.sort((a, b) => a[0].localeCompare(b[0]));

    for (const line of sortedCopmany) {
        let companyName = line[0];
        let users = line[1].join(`\n-- `);

        console.log(companyName);
        console.log(`-- ${users}`);
    }

}

companyUsers
    // ([ 
    // 'SoftUni -> AA12345', 
    // 'SoftUni -> BB12345', 
    // 'Microsoft -> CC12345', 
    // 'HP -> BB12345' ])

    (['SoftUni -> AA12345',
        'SoftUni -> CC12344',
        'Lenovo -> XX23456',
        'SoftUni -> AA12345',
        'Movement -> DD11111'])