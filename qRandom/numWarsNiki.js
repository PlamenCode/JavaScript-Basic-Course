function gameNumberWars(input) {
    let index = 0;
    let nameFirstPlayer = input[index++];
    let nameSecondPlayer = input[index++];
    let command = input[index++];

    let someTimeWarFirst = 0;
    let someTimeWarSecond = 0;
    let isTrue = false;
    let isFlag = false;

    let sumPointFirstPlayer = 0;
    let sumPointSecondPlayer = 0;

    let qualityInput = 0;

    while (command !== "End of game") {
        let player = Number(command);
        qualityInput++;

        if (qualityInput % 2 !== 0) {
            someTimeWarFirst += player;
        } else if (qualityInput % 2 === 0) {
            someTimeWarSecond += player;
        }

        if (
            someTimeWarFirst > someTimeWarSecond &&
            someTimeWarFirst !== 0 &&
            someTimeWarSecond !== 0
        ) {
            if (isFlag === true) {
                sumPointFirstPlayer = sumPointFirstPlayer;
                break;
            } else {
                sumPointFirstPlayer += someTimeWarFirst - someTimeWarSecond;
            }
        } else if (
            someTimeWarFirst < someTimeWarSecond &&
            someTimeWarFirst !== 0 &&
            someTimeWarSecond !== 0
        ) {
            if (isFlag === true) {
                sumPointSecondPlayer = sumPointSecondPlayer;
                break;
            } else {
                sumPointSecondPlayer += someTimeWarSecond - someTimeWarFirst;
            }
        } else if (someTimeWarFirst === someTimeWarSecond) {
            console.log(`Number wars!`);
            isFlag = true;
        }
        if (qualityInput % 2 === 0) {
            someTimeWarFirst = 0;
            someTimeWarSecond = 0;
        }
        command = input[index++];
        if (command === "End of game") {
            isTrue = true;
        }
    }
    if (isTrue === true) {
        console.log(`${nameFirstPlayer} has ${sumPointFirstPlayer} points`);
        console.log(`${nameSecondPlayer} has ${sumPointSecondPlayer} points`);
    } else if (isFlag === true) {
        if (sumPointFirstPlayer > sumPointSecondPlayer) {
            console.log(
                `${nameFirstPlayer} is winner with ${sumPointFirstPlayer} points`
            );
        } else {
            console.log(
                `${nameSecondPlayer} is winner with ${sumPointSecondPlayer} points`
            );
        }
    }
}
gameNumberWars(['Elena','Simeon','6','3','2','5','8','9','End of game'])
// gameNumberWars(['Desi','Niki','7','5','3','4','3','3','5','3'])
// gameNumberWars(['Alex','Georgi','4','5','3','2','4','3','4','4','5','2'])