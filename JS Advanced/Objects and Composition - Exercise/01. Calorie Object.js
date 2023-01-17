function calorieObject(input){
    const calorie = {};

    for(let i = 0; i < input.length; i += 2){
        let element = input[i];
        let calories = Number(input[i + 1]);

        calorie[element] = calories;
    }
    console.log(calorie);

}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])