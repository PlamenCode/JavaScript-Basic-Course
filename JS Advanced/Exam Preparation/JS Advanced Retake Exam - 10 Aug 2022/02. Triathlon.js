class Triathlon{
    constructor(copmetitionName){
        this.copmetitionName = copmetitionName
        this.participants = {}
        this.listOfFinalists = []
    }

    addParticipant (participantName, participantGender){
        if(this.participants.hasOwnProperty(participantName)){
            return `${participantName} has already been added to the list`;
        }
        this.participants[participantName] = participantGender;
        return `A new participant has been added - ${participantName}`
    }

    completeness (participantName, condition){
        if(!this.participants.hasOwnProperty(participantName)){
            throw new Error(`${participantName} is not in the current participants list`);
        }

        if(condition < 30){
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }

        let completedCount = Math.floor(condition / 30);

        if(completedCount <= 2){
            return `${participantName} could only complete ${completedCount} of the disciplines`;
        }

        let currentFinalist = {};
        currentFinalist[participantName] = this.participants[participantName]
        this.listOfFinalists.push(currentFinalist);

        delete this.participants[participantName];
        return `Congratulations, ${participantName} finished the whole competition`;
    }

    rewarding (participantName){
        let isPresent = false;
        for (const finalist of this.listOfFinalists) {
            if(Object.keys(finalist) == participantName){
                isPresent = true;
                return `${participantName} was rewarded with a trophy for his performance`
            }
        }
        if(!isPresent){
            return `${participantName} is not in the current finalists list`;
        }
    }

    showRecord (criteria){
        if(this.listOfFinalists.length < 1){
            return `There are no finalists in this competition`;
        }

        if(!criteria == 'all'){
            for (const finalist of this.listOfFinalists) {
                let gender = Object.values(finalist);
                let name = Object.keys(finalist);

                if(gender[0] == criteria){
                    return `${name[0]} is the first ${criteria} that finished the ${this.copmetitionName} triathlon`;
                }
            }
            return `There are no ${criteria}'s that finished the competition`;
        }


        let result = '';
        result += `List of all ${this.copmetitionName} finalists:\n`;

        let names = [];

        for (const participant of this.listOfFinalists) {
            let name = Object.keys(participant);
            names.push(name[0]);
        }

        let sortedNames = names.sort((a,b) => a.localeCompare(b));
        for(let i = 0; i < sortedNames.length; i++){
            if(i < sortedNames.length - 1){
                result += `${sortedNames[i]}\n`;
            } else{
                result += `${sortedNames[i]}`;
            }
        }
        return result;
    }
}

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.showRecord("all"));



