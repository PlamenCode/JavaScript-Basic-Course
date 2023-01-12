function meetings(input) {
    let meeting = {};

    for (const line of input) {
        let [day, person] = line.split(' ');

        if(!meeting[day]){
            meeting[day] = person;
            console.log(`Scheduled for ${day}`);
        } else{
            console.log(`Conflict on ${day}!`);
        }
    }

    for (const key in meeting) {
       console.log(`${key} -> ${meeting[key]}`);
    }

}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])