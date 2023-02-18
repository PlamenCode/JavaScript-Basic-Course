class footballTeam{
    constructor(clubName, country){
        this.clubName = clubName
        this.country = country
        this.invitedPlayers = [] 
    };

    newAdditions(footballPlayers){
        let invited = [];
        for (const player of footballPlayers) {
            let [name, age, playerValue] = player.split('/');

            let isPresent = this.invitedPlayers.find(x => x.name == name)

            if(!isPresent){
                let currentPlayer = {
                    name: name,
                    age: age,
                    playerValue: playerValue
                };
                this.invitedPlayers.push(currentPlayer); 
                invited.push(name);
            } else{
                if(isPresent.playerValue < playerValue){
                    isPresent.playerValue = playerValue;
                }
            }
        }
        return `You successfully invite ${invited.join(', ')}.`;
    };

    signContract(selectedPlayer){
        let [name, offer] = selectedPlayer.split('/');

        let player = this.invitedPlayers.find(x => x.name == name)

        if(!player){
            throw new Error(`${name} is not invited to the selection list!`);
        };

        if(offer < player.playerValue){
            let diff = Math.abs(offer - player.playerValue);
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${diff} million more are needed to sign the contract!`)
        };

        player.playerValue = 'Bought';
        return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;
    };

    ageLimit(name, age){
        let player = this.invitedPlayers.find(x => x.name == name)

        if(!player){
            throw new Error(`${name} is not invited to the selection list!`);
        };

        if(player.age < age){
            let diff = age - player.age;

            if(diff < 5){
                return `${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`;
            };

            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
        };

        return `${name} is above age limit!`;
    };

    transferWindowResult(){
        let result = `Players list:\n`;

        let sortedPlayers = this.invitedPlayers.sort((a, b) => {
            let nameA = a.name;
            let nameB = b.name;
            return nameA.localeCompare(nameB);
        });

        for (const player of sortedPlayers) {
            result += `Player ${player.name}-${player.playerValue}\n`;
        }
        return result.trim();
    }

}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
