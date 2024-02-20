function calculateNeededMoney(fruit: string, weightGrams: number, priceKg: number): void {
    const weightKg: number = weightGrams / 1000;
    const finalPrice: number = weightKg * priceKg;
    console.log(`I need $${finalPrice.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
}

calculateNeededMoney('orange', 2500, 1.80);
calculateNeededMoney('apple', 1563, 2.35);