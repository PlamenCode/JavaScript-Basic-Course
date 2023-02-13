class SmartHike{
    constructor(username){
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    };

    addGoal(peak, altitude){
        if(Object.keys(this.goals).includes(peak)){
            return `${peak} has already been added to your goals`;
        }
        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`;
    };

    hike(peak, time, difficultyLevel){
        if(!Object.keys(this.goals).includes(peak)){
            throw new Error(`${peak} is not in your current goals`);
        }

        if(this.resources == 0){
            throw new Error("You don't have enough resources to start the hike");
        }

        let diff = this.resources - time * 10;
        if(diff < 0){
            return "You don't have enough resources to complete the hike";
        }

        this.resources -= time * 10;
        let currentHike = {
            peak: peak,
            time: time,
            difficultyLevel: difficultyLevel
        }

        this.listOfHikes.push(currentHike);
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
    };

    rest(time){
        let add = time * 10;
        this.resources += add;

        if(this.resources > 100){
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }

        return `You have rested for ${time} hours and gained ${add}% resources`;
    };

    showRecord(criteria){
        if(this.listOfHikes.length < 1){
            return `${this.username} has not done any hiking yet`;
        };

        if (criteria == 'all'){
            let result = '';
            result += 'All hiking records:\n';
            this.listOfHikes.forEach(el => {
                if(this.listOfHikes.indexOf(el) < this.listOfHikes.length - 1){
                    result += `${this.username} hiked ${el.peak} for ${el.time} hours\n`;
                } else{
                    result += `${this.username} hiked ${el.peak} for ${el.time} hours`;
                }
            })
            return result;
        }
        
        let criteriaArr = [];
        this.listOfHikes.forEach(el => {
            if(el.difficultyLevel == criteria){
                criteriaArr.push(el);
            }
        });

        if(criteriaArr.length < 1){
            return `${this.username} has not done any ${criteria} hiking yet`;
        }

        let sorted = criteriaArr.sort((a,b) => a.time - b.time);
        return `${this.username}'s best ${criteria} hike is ${sorted[0].peak} peak, for ${sorted[0].time} hours`;    
    }
}
const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 2, 'hard');
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));


