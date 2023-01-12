function fruit(typeOfFruit, weight, pricePerKg) {
    
    const MoneyNeeded = (weight / 1000) * pricePerKg
    const weightPrint = weight / 1000;
    console.log(`I need $${MoneyNeeded.toFixed(2)} to buy ${weightPrint.toFixed(2)} kilograms ${typeOfFruit}.`);
    
}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);