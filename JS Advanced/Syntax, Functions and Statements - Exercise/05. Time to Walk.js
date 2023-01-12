function timeToWalk(steps, stepDistance, speed){

    const distanceToUni = steps * stepDistance; // meters
    const speedMpS = speed / 3.6;
    const rest = Math.floor(distanceToUni / 500) * 60;
    const time = distanceToUni / speedMpS + rest;

    const hours = Math.floor(time / 3600);
    const minutes = Math.floor(time / 60);
    const seconds = Math.round(time % 60);

    console.log(`${hours < 10 ? 0 : ''}${hours}:${minutes < 10 ? 0 : ''}${minutes}:${seconds < 10 ? 0 : ''}${seconds}`);
    
}
timeToWalk(4000, 0.60, 5);
//00:32:48