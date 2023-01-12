function blackFlag(input){
    let days = Number(input[0]);
    let dailyPlunder = Number(input[1]);
    let target = Number(input[2]);
    let totalCollected = 0;

    for(let i = 1; i <= days; i++){
        totalCollected += dailyPlunder;

        if(i % 3 == 0){
            totalCollected += dailyPlunder * 0.5;
        }
        if(i % 5 == 0){
            totalCollected *= 0.7
        }
    }
    if(totalCollected >= target){
        console.log(`Ahoy! ${totalCollected.toFixed(2)} plunder gained.`);
    } else{
        let percent = (totalCollected / target) * 100;
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`);
    }
}