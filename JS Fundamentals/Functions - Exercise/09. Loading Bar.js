function loadingBar(num){

    let precent = '%'.repeat(num / 10);
    let dotsNeeded = '.'.repeat(10 - (num / 10));
    if(num == 100){
        console.log('100% Complete!');
    } else if(num < 100){
        console.log(`${num}% [${precent}${dotsNeeded}]`);
        console.log('Still loading...');
    }
}
loadingBar(50)