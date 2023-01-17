function townPopulation(arr){
    const result = {};

    for (const line of arr) {
        let [town, population] = line.split(' <-> ');
        population = Number(population);

        if(result[town]){
            result[town] += population;
        } else{
            result[town] = population;
        }    
    }
    
    for (const key in result) {
           console.log(`${key} : ${result[key]}`);
    }
}
townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'])