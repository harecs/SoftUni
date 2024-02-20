function calculateNeededMoney(fruit, weightGrams, priceKg) {
    var weightKg = weightGrams / 1000;
    var finalPrice = weightKg * priceKg;
    console.log("I need $".concat(finalPrice.toFixed(2), " to buy ").concat(weightKg.toFixed(2), " kilograms ").concat(fruit, "."));
}
calculateNeededMoney('orange', 2500, 1.80);
calculateNeededMoney('apple', 1563, 2.35);
