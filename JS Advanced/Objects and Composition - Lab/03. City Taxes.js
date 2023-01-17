function cityTaxes(name, population, treasury){

    let result = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate); },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * (percentage / 100)); },
        applyRecession(percentage) {
            this.treasury -= Math.floor(this.treasury * (percentage / 100)); },
    }

    return result;
}
const print = cityTaxes('Tortuga', 7000, 1500);
cityTaxes.collectTaxes();
console.log(result.treasury);
cityTaxes.applyGrowth(5);
console.log(result.population);