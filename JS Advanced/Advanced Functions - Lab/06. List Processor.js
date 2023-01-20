function processComand(commands){
    let commandProcess = (function (){
        let list = [];
        return {
            add: (newItem) => list.push(newItem),
            remove: (itemRemoved) => list = list.filter(x => x != itemRemoved),
            print: () => console.log(list)
        }
    })();

    for (const command of commands) {
        let[cmdName, arg] = command.split(' ');
        commandProcess[cmdName](arg);   
    }
}

processComand(['add hello', 'add again',
'remove hello', 'add again', 'print'])