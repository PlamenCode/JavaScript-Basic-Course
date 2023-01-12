function imitationGame(input) {
    let code = input.shift().split("");

    for (const line of input) {
        let command = line.split("|");
        let action = command.shift();

        if (line == "Decode") {
            break;
        } else {
            switch (action) {
                case "Move":
                    let numOfLetters = Number(command.shift());
                    let lettersToMove = code.splice(0, numOfLetters);
                    code = code.concat(lettersToMove);
                    break;

                case "Insert":
                    let index = Number(command.shift());
                    let value = command.shift();
                    code.splice(index, 0, value);
                    break;

                case "ChangeAll":
                    let wrongEl = command.shift();
                    let rightEl = command.shift();

                    for (let el of code) {
                        if (el == wrongEl) {
                            let index = code.indexOf(el);
                            code[index] = rightEl;
                        }
                    }
                    break;
            }
        }
    }
    console.log(`The decrypted message is: ${code.join("")}`);
}
imitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
imitationGame([
    "owyouh",
    "Move|2",
    "Move|3",
    "Insert|3|are",
    "Insert|9|?",
    "Decode",
]);
