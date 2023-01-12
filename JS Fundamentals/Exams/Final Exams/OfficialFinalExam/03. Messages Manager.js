function messeges(input){
    let capacityLimit = Number(input.shift());
    let users = {};

    let command = input.shift();

    while(command != 'Statistics'){
        let line = command.split('=');
        let action = line.shift();

        switch(action){
            case'Add':{
                let [userName,sent,recieved] = line;
                let capacity = Number(sent) + Number(recieved);
                if(!users[userName]){
                    users[userName] = {
                        capacity: capacity,
                        sent: Number(sent),
                        recieved: Number(recieved)
                    }
                }
                break;
            }
            case'Message':{
                let [sender,reciever] = line;
                if(users[sender] && users[reciever]){
                    users[sender].sent = users[sender].sent + 1;
                    users[sender].capacity++;
                    users[reciever].recieved++;
                    users[reciever].capacity++;
                    if (users[sender].capacity >= capacityLimit) {
                        console.log(`${sender} reached the capacity!`);
                        delete users[sender]
                    }
                    if (users[reciever].capacity >= capacityLimit) {
                        console.log(`${reciever} reached the capacity!`);
                        delete users[reciever]
                    }
                }
                break;
            }
            case'Empty':{
                let userName = line.shift();
                if(userName == 'All'){
                    users = {};
                }
                if(users[userName]){
                    users[userName] = {
                        capacity: 0,
                        sent: 0,
                        recieved: 0
                    }
                }
                break;
            }
        }
        command = input.shift();
    }
    let userCount = 0;
    let objResult = Object.entries(users);
    for (let user of objResult) {
        userCount++; 
    }
    console.log(`Users count: ${userCount}`);

    for (let user of objResult) {
        let userName = user[0];
        let numOfMesseges = user[1].capacity
        console.log(`${userName} - ${numOfMesseges}`);
        
    }

}
messeges(["10",
"Add=Berg=9=0",
"Add=Kevin=0=0",
"Message=Berg=Kevin",
"Add=Mark=5=4",
"Statistics"])
