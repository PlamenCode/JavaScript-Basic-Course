function softUniReception(input){
    const workerOnePeoplePerHour = input[0];
    const WorkerTwoPeoplePerHour = input[1];
    const workerThreePeoplePerHout = input[2];
    const studentsCount = input[3];

    let studentsToPass = studentsCount;
    let HoursCount = 0;
    let hoursNeeded = 0;

    while(studentsToPass > 0){
        if(HoursCount == 3){
            HoursCount = 0;
            hoursNeeded++;
        } else{
            let totalPoplePerHour = workerOnePeoplePerHour + WorkerTwoPeoplePerHour + workerThreePeoplePerHout;
            studentsToPass -= totalPoplePerHour;
            HoursCount++;
            hoursNeeded++;
        }
    }
    console.log(`Time needed: ${hoursNeeded}h.`);

}
softUniReception([1,2,3,45])