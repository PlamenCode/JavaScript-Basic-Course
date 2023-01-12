function arrayManipulation(input){
    let arr = input.shift().split(' ').map(Number);

    for (const element of input) {

        let temppArray = element.split(' ');
        let command = temppArray[0]
        let num = Number(temppArray[1]);

        switch(command){
            case 'Add': arr.push(num); break;
            case 'Remove': arr = arr.filter(el => el !== num); break;
            case 'RemoveAt': arr.splice(num, 1); break;
            case 'Insert': arr.splice(temppArray[2], 0, num); break;
        } 
    }
    console.log(arr.join(' '));
}
arrayManipulation(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])