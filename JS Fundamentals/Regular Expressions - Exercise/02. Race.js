function race(input){
    let racers = input.shift().split(', ');
    let patternWord = /[A-Za-z]+/g;
    let patternNum = /[0-9]+/g

    let raceObj = {};

    let command = input.shift();

    while(command !== 'end of race'){
        let line = command;
        let name = line.match(patternWord).join('');
        let distanceText = line.match(patternNum).join('').split('');
        
        if(racers.includes(name)){
            let distance = 0;
            for (let digit of distanceText) {
                distance += Number(digit)
            }

            if(!raceObj.hasOwnProperty(name)){
                raceObj[name] = distance;
            } else{
                raceObj[name] += distance; 
            }
        }

        command = input.shift();
    }

    let sortedRacers = Object.entries(raceObj);
    sortedRacers.sort((a, b)=> b[1]- a[1]);
    let [first, second, third] = sortedRacers;
    
    console.log(`1st place: ${first[0]}`);
    console.log(`2nd place: ${second[0]}`);
    console.log(`3rd place: ${third[0]}`);
    
}
race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race'])