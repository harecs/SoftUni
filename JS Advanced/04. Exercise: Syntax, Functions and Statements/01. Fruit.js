function calculateNeededMoney(fruit, weightGrams, priceKg) {
    const weightKg = weightGrams / 1000;
    const finalPrice = weightKg * priceKg;
    console.log(`I need $${finalPrice.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
}