function shoppingList(input){
    let list = input.shift().split('!');

    for(let i = 0; i < input.length; i++){
        
        let element = input[i].split(' ');
        let command = element[0];
        let item = element[1];
        let includes = true;

        switch(command){
            case 'Urgent':
                includes = list.includes(item);
                if(!includes){ list.unshift(item); }  
                ; break;

            case 'Unnecessary':
                includes = list.includes(item);               
                if(includes){
                    let itemIndex = list.indexOf(item);
                    let removedItem = list.splice(itemIndex,1); }
                ; break;

            case 'Correct':
                let oldName = element[1];
                let newName = element[2];
                includes = list.includes(oldName);
                   if(includes){
                    let indexItem = list.indexOf(oldName);
                    list[indexItem] = newName; }
                ; break;

            case 'Rearrange':
                includes = list.includes(item);
                let indexOfItem = list.indexOf(item);
                if(includes){
                    let itemToRearrange = list.splice(indexOfItem,1);
                    list.push(itemToRearrange);}
                ; break;
            }
        }
console.log(list.join(', '));

}

// shoppingList(["Tomatoes!Potatoes!Bread",
// "Unnecessary Milk","Urgent Tomatoes","Go Shopping!"])

shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt","Unnecessary Grapes","Correct Pepper Onion",
"Rearrange Grapes", "Correct Tomatoes Potatoes", "Go Shopping!"])