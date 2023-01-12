function task4(input){
    let num = Number(input[0]);
    let index = 1;
    let points = 0;
    let red = 0;
    let yellow = 0;
    let orange = 0;
    let white = 0;
    let black = 0;
    let basic = 0;

    for(let i = 1; i <= num; i++){
        let ball = input[index++];

        if(ball === 'red'){
            points += 5;
            red++;
        } else if(ball === 'orange'){
            points += 10;
            orange++;
        } else if( ball === 'yellow'){
            points += 15;
            yellow++
        } else if( ball === 'white'){
            points += 20;
            white++;
        } else if(ball === 'black'){
            points = Math.floor(points / 2);
            black++;
        } else{
            basic++;
        }
    }
    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${red}`);
    console.log(`Orange balls: ${orange}`);
    console.log(`Yellow balls: ${yellow}`);
    console.log(`White balls: ${white}`);
    console.log(`Other colors picked: ${basic}`);
    console.log(`Divides from black balls: ${black}`);
}
task4(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"])