class footballTeam{
    constructor(clubName, contry, invatedPlayers){
        this.clubName = clubName
        this.contry = contry
        this.invatedPlayers = []
        this.playersNames = []
    }

    newAdditions(footballPlayers){
        for (const line of footballPlayers) {
            let [name,age,playerValue] = line.split('/');
            playerValue = Number(playerValue);
            let playerInfo = {
                name,
                age,
                playerValue
            }
            let isFound = false;
            
            for (const player in this.invatedPlayers) {
                if(player.name == name){
                    isFound = true;
                    if(player.playerValue < playerValue){
                        player.playerValue = playerValue;
                    }
                }
            }
            if(!isFound){
                this.invatedPlayers.push(playerInfo);
            }
            this.playersNames.push(name);
        }
        return `You successfully invite ${this.playersNames.join(', ')}.`;
    }

    signContract(selectedPlayer){
        let [playerName, offer] = selectedPlayer.split('/');
        offer = Number(offer);
        let isFound = false;
        for (const player of this.invatedPlayers) {
            if(playerName == player.name){
                isFound = true;
                if(offer < player.playerValue){
                    let priceDifference = player.playerValue - offer
                    throw new Error(`The manager's offer is not enough to sign a contract with ${playerName}, ${priceDifference} million more are needed to sign the contract!`)
                } else{
                    player.playerValue = 'Bought';
                    return `Congratulations! You sign a contract with ${playerName} for ${offer} million dollars.`;
                }
            }
        }
        if(!isFound){
            throw new Error(`${playerName} is not invited to the selection list!`);
        }
    }

    ageLimit(name, age){
        let isFound = false;
        for (const player of this.invatedPlayers) {
            if(name == player.name){
                isFound = true;
                if(player.age >= age){
                    return `${name} is above age limit!`
                }
                let diff = Math.abs(age - player.age);

                if(diff < 5){
                    return `${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`
                }

                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            }
        }

        if(!isFound){
            throw new Error(`${name} is not invited to the selection list!`);
        }

    }

    transferWindowResult(){
        let result = '';
        result += `Players list:\n`;
        let sorted = this.invatedPlayers.sort((p1, p2) => (p1.name.localeCompare(p2.name)));
        for (const player of sorted) {
            result += `Player ${player.name}-${player.playerValue}\n`;
        }
        return result;
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());



