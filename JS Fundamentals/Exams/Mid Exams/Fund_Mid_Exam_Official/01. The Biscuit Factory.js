function biscuit(input){
    let biscuitPerWorker = Number(input[0]);
    let workersCount = Number(input[1]);
    let otherCompany = Number(input[2]);

    let totalBiscuitPerDay = biscuitPerWorker * workersCount;
    let totalBuiscitProduced = 0;

    for(let i = 1; i <= 30; i++){

        if(i % 3 === 0){
            totalBuiscitProduced += Math.floor(totalBiscuitPerDay * 0.75);
        } else{
            totalBuiscitProduced += totalBiscuitPerDay;
        }
    }
    console.log(`You have produced ${totalBuiscitProduced} biscuits for the past month.`);

    if(totalBuiscitProduced > otherCompany){
        let diffBetweenProduction = totalBuiscitProduced - otherCompany;
        let percentage = (diffBetweenProduction / otherCompany) * 100;
        console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
    } else{
        let diffBetweenProductio = otherCompany - totalBuiscitProduced;
        let percent = (diffBetweenProductio / otherCompany) * 100;
        console.log(`You produce ${percent.toFixed(2)} percent less biscuits.`);
    }
}
biscuit(['78','8','16000'])