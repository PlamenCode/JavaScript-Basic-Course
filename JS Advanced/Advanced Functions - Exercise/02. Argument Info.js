function argumentInfo(){
    let argumentss = Array.from(arguments);

    let object = {};

    for (const argument of argumentss) {
        let type = typeof argument;
        console.log(`${type}: ${argument}`);
        if(!object[type]){
            object[type] = 0;
        } 
        object[type]++
    }
    let result = Object.entries(object).sort((a,b) => b[1] - a[1]);
    for (const line of result) {
        let type = line[0];
        let count = line[1];
        console.log(`${type} = ${count}`);  
    }
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })