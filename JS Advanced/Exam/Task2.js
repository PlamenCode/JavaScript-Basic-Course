class WineSelection{
    constructor(space){
        this.space = space
        this.wines = []
        this.bill = 0
    };

    reserveABottle (wineName, wineType, price){
        if(this.space < 1){
            throw new Error("Not enough space in the cellar.");
        };

        let wine = {
            wineName: wineName,
            wineType: wineType,
            price: price,
            paid: false
        };

        this.wines.push(wine);
        this.space--;
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    };

    payWineBottle( wineName, price ) {
        let wine = this.wines.find(x => x.wineName == wineName);

        if(!wine){
            throw new Error(`${wineName} is not in the cellar.`);
        };
        if(wine.paid){
            throw new Error(`${wineName} has already been paid.`);
        };

        wine.paid = true;
        wine.price = price;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`;
    };

    openBottle(wineName) {
        let wine = this.wines.find(x => x.wineName == wineName);

        if(!wine){
            throw new Error(`The wine, you're looking for, is not found.`);
        };

        if(!wine.paid){
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        };

        let index = this.wines.indexOf(wine);
        let removedWine = this.wines.splice(index,1);

        return `You drank a bottle of ${wineName}.`;
    };

    cellarRevision(wineType){

        if(!wineType){
            let result = `You have space for ${this.space} bottles more.\n`;
            result += `You paid ${this.bill}$ for the wine.\n`;

            let sortedWines = this.wines.sort((a,b) => a.wineName.localeCompare(b.wineName))


            for (const wine of sortedWines) {
                let isPaind = wine.paid ? 'Has Paid' : 'Not Paid';
                result += `${wine.wineName} > ${wine.wineType} - ${isPaind}.\n`;
            }
            return result.trim();
        };

        let sortedWinesType = this.wines.sort(a => a.wineType == wineType);
        console.log(sortedWinesType);
        let sortedWines = sortedWinesType.sort((a,b) => b.wineName.localeCompare(a.wineName));


        if(sortedWines.length < 1){
            throw new Error(`There is no ${wineType} in the cellar.`);
        };

        let result = '';

        for (const wine of sortedWines) {
            let isPaind = wine.paid ? 'Has Paid' : 'Not Paid';
            result += `${wine.wineName} > ${wine.wineType} - ${isPaind}.\n`;
        };

        return result.trim();
    }

};
let selection = new WineSelection(5);

console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));
console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));

console.log(selection.cellarRevision());