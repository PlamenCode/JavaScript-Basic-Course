const carService = require('./03. Car Service_Resources');
let expect = require('chai').expect;

describe('03. Car Service Resources Tests', () => {
    it('Tests for isItExpensive (issue) functionality', () => {
        expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
        expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money');
        expect(carService.isItExpensive('Tires')).to.equal('The overall price will be a bit cheaper');
    });

    it('Tests for discount(numberOfParts, totalPrice) functionality', () => {
        expect(() => {carService.discount('4',100)}).to.throw('Invalid input');
        expect(() => {carService.discount(4,'100')}).to.throw('Invalid input');

        expect(carService.discount(2, 100)).to.equal('You cannot apply a discount');
        expect(carService.discount(1, 100)).to.equal('You cannot apply a discount');
        expect(carService.discount(7, 100)).to.equal(`Discount applied! You saved 15$`);
        expect(carService.discount(8, 100)).to.equal(`Discount applied! You saved 30$`);
    });

    it('Tests for partsToBuy(partsCatalog, neededParts) functionality', () => {
        expect(() => {carService.partsToBuy('array', [])}).to.throw('Invalid input');
        expect(() => {carService.partsToBuy([], 'array')}).to.throw('Invalid input');

        expect(carService.partsToBuy([], ['battery'])).to.equal(0);
        expect(carService.partsToBuy( [ {part:'battery',price: 200}, {part:'Fm Transmiter', price: 10} ] , ['battery','tire',])).to.equal(200);
        expect(carService.partsToBuy( [ {part:'battery',price: 200}, {part:'Fm Transmiter', price: 10}, {part:'tires',price:1000}] , ['battery','tires',])).to.equal(1200);
    });
})