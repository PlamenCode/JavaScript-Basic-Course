//start 15
let flowerShop = require('./flowerShop');
let expect = require('chai').expect;

describe('Task Flower Shop', () => {
    it('Tests calcPriceOfFlowers(flower, price, quantity) errors', () => {
        //string num num
        expect(() => { flowerShop.calcPriceOfFlowers(1, 1, 1)}).to.throw('Invalid input!');
        expect(() => { flowerShop.calcPriceOfFlowers('rose', '1', 1)}).to.throw('Invalid input!');
        expect(() => { flowerShop.calcPriceOfFlowers('rose', 1, '1')}).to.throw('Invalid input!');
    });
    it('Tests calcPriceOfFlowers(flower, price, quantity) correct ', () => {
        //string num num
       expect(flowerShop.calcPriceOfFlowers('rose',2, 10)).to.equal(`You need $20.00 to buy rose!`);
    });

    it('Tests  checkFlowersAvailable(flower, gardenArr)', () => {
        expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).to.equal(`The Rose are available!`);
        expect(flowerShop.checkFlowersAvailable('Lily', ["Rose", "Lily", "Orchid"])).to.equal(`The Lily are available!`);
        expect(flowerShop.checkFlowersAvailable('Flower', ["Rose", "Lily", "Orchid"])).to.equal('The Flower are sold! You need to purchase more!');
    });

    it('Tests sellFlowers(gardenArr, space) error', () => {
        //array and num
        expect(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], '1')}).to.throw('Invalid input!');
        expect(() => { flowerShop.sellFlowers('String', 1)}).to.throw('Invalid input!');
        expect(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1)}).to.throw('Invalid input!');
        expect(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3)}).to.throw('Invalid input!');
        expect(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 4)}).to.throw('Invalid input!');
    });
    it('Tests sellFlowers(gardenArr, space)', () => {
        expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0)).to.equal('Lily / Orchid');
        expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1)).to.equal('Rose / Orchid');
        expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2)).to.equal('Rose / Lily');
    });
})