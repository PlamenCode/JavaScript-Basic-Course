function houseParty(input){
    let guestList = [];
    for(let i = 0; i < input.length; i++){
        let currentCom = input[i].split(" ");
        let name = currentCom[0];

        if(currentCom[2] !== 'not'){
            if(!guestList.includes(name)){
                guestList.push(name);
            } else{
                console.log(`${name} is already in the list!`);
            }
        } else {
            if(guestList.includes(name)){
                guestList = guestList.filter(x => x != name);
            } else{
                console.log(`${name} is not in the list!`)
            }
    
        }
    }
console.log(guestList.join('\n'));

}
houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!'])