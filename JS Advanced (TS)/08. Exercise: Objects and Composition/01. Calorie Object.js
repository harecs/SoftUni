function createCalorieObject(inputArray) {
    const calorieObject = {};

    for (let i = 0; i < inputArray.length; i += 2) {
        calorieObject[inputArray[i]] = Number(inputArray[i + 1]);
    }

    console.log(calorieObject);
}

createCalorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
createCalorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])