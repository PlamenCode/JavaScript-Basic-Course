function townsToJSON(input){

    let line = input.shift();
    let lineStr = line.slice(2,line.length - 2);
    let [town, latitude, longitude] = lineStr.split(' | ');
    
    let result = [];

    for (let line of input) {

        let lineString = line.slice(2,line.length - 2);
        let [townValue, latitudeValue, longitudeValue] = lineString.split(' | ');

        let city = {};
        city[town] = townValue,
        city[latitude] = Number(Number(latitudeValue).toFixed(2)),
        city[longitude] = Number(Number(longitudeValue).toFixed(2))
        
        result.push(city)
    }
    console.log(JSON.stringify(result));
    
}
townsToJSON(
['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)