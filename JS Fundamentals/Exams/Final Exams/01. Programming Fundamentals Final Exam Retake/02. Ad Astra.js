function adAstra(input){
    let text = input.shift();
    let caloriesNeededPerDay = 2000;
    let pattern = /(#|\|)(?<food>[A-Z][a-z|\sA-Za-z]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g
    let itemsPrint = [];

    let items = text.matchAll(pattern);
    let totalCalories = 0;
    for (const item of items) {
        let product = item.groups.food;
        let date = item.groups.date; 
        let calories = Number(item.groups.calories);

        itemsPrint.push([product, date, calories]);
        totalCalories += calories;
    }
    let daysWithFood = Math.floor(totalCalories / caloriesNeededPerDay);
    console.log(`You have food to last you for: ${daysWithFood} days!`);
    for (let line of itemsPrint) {
        let [item, date, calories] = line.join('  ').split('  ')
        console.log(`Item: ${item}, Best before: ${date}, Nutrition: ${calories}`);
        
    }
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|#Ice Cream#19/03/21#4000#'
    ]
    )