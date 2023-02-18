const findNewApartment =  require('./findApartment');
let expect = require('chai').expect;

describe('find Apartment tests', () => {
    it('Tests for isGoodLocation(city, nearPublicTransportation)', ()=>{
        expect(()=>{findNewApartment.isGoodLocation(10, true)}).to.throw("Invalid input!");
        expect(()=>{findNewApartment.isGoodLocation('Plovdiv', '10')}).to.throw("Invalid input!");

        expect(findNewApartment.isGoodLocation('Something', true)).to.equal("This location is not suitable for you.");
        expect(findNewApartment.isGoodLocation('Something', false)).to.equal("This location is not suitable for you.");

        expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal("You can go on home tour!");
        expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal("You can go on home tour!");
        expect(findNewApartment.isGoodLocation('Varna', true)).to.equal("You can go on home tour!");

        expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal("There is no public transport in area.");
        expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal("There is no public transport in area.");
        expect(findNewApartment.isGoodLocation('Varna', false)).to.equal("There is no public transport in area.");
    });

    it('Tests for isLargeEnough (apartments, minimalSquareMeters)', ()=>{
        expect(() => { findNewApartment.isLargeEnough('string', 50)}).to.throw("Invalid input!");
        expect(() => { findNewApartment.isLargeEnough([40,50,60], 'string')}).to.throw("Invalid input!");
        expect(() => { findNewApartment.isLargeEnough([], 'string')}).to.throw("Invalid input!");

        expect(findNewApartment.isLargeEnough([40,50,60,70,80], 40)).to.equal(`40, 50, 60, 70, 80`);
        expect(findNewApartment.isLargeEnough([40,50,60,70,80], 65)).to.equal(`70, 80`);
    });

    it('tests for isItAffordable(price, budget)', ()=>{
        expect(() => {findNewApartment.isItAffordable('10000', 15000)}).to.throw("Invalid input!");
        expect(() => {findNewApartment.isItAffordable(10000, '15000')}).to.throw("Invalid input!");
        expect(() => {findNewApartment.isItAffordable(-10000, 15000)}).to.throw("Invalid input!");
        expect(() => {findNewApartment.isItAffordable(10000, -15000)}).to.throw("Invalid input!");

        expect(findNewApartment.isItAffordable(10000, 15000)).to.equal("You can afford this home!");
        expect(findNewApartment.isItAffordable(15000, 10000)).to.equal("You don't have enough money for this house!");
    });
})