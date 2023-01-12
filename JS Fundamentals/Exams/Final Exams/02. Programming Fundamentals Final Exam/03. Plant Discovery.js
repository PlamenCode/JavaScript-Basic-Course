function plantDiscovery(input) {
    let n = Number(input.shift());
    let plants = {};

    for (let i = 0; i < n; i++) {
        let [plantName, rarity] = input.shift().split("<->");
        plants[plantName] = {
            rarity: rarity,
            ratings: [],
        };
    }

    let command = input.shift();

    while (command != "Exhibition") {
        let [action, arg] = command.split(": ");
        let [plant, points] = arg.split(" - ");

        if (plants[plant]) {
            switch (action) {
                case "Rate": {
                    plants[plant].ratings.push(Number(points));
                    break;
                }

                case "Update": {
                    plants[plant].rarity = points;
                    break;
                }

                case "Reset": {
                    plants[plant].ratings = [];
                    break;
                }
            }
        } else {
            console.log("error");
        }

        command = input.shift();
    }

    let flowers = Object.entries(plants);

    console.log("Plants for the exhibition:");
    for (const flower of flowers) {
        let sumOfRatings = 0;
        let count = 0;

        let name = flower[0];
        let rarity = flower[1].rarity;
        let ratings = flower[1].ratings;

        for (const rating of ratings) {
            count++;
            sumOfRatings += Number(rating);
        }
        let avg = sumOfRatings / count;
        if (!avg) {
            avg = 0;
        }
        console.log(`- ${name}; Rarity: ${rarity}; Rating: ${avg.toFixed(2)}`);
    }
}
plantDiscovery([
    "3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition",
]);
