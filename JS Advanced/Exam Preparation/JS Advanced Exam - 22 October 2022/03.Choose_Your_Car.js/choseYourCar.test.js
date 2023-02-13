const { brandName, carFuelConsumption } = require('./chooseYourCar');
const chooseYourCar = require('./chooseYourCar');
let expect = require('chai').expect;

describe('tests for task Chose your car', () => {
    describe('tests for 1-st functionality (choosingType)', () => {

        it('tests the year input and if it throws error whith value below', () =>{
            expect(chooseYourCar.choosingType.bind(chooseYourCar, 'Sedan','white', 1899)).to.throw(`Invalid Year!`);
        });
        it('tests the year input and if it throws error whith value above', () =>{
            expect(chooseYourCar.choosingType.bind(chooseYourCar, 'sedan','white', 2023)).to.throw(`Invalid Year!`);
        });
        it('tests if it throws error if the type is wrong', () =>{
            expect(chooseYourCar.choosingType.bind(chooseYourCar, 'Passat','white', 2020)).to.throw(`This type of car is not what you are looking for.`);
        });
        it('testt if it returns correctly with correct values above 2010', () =>{
            expect(chooseYourCar.choosingType('Sedan', 'white', 2010)).to.equal(`This white Sedan meets the requirements, that you have.`);
        });
        it('testt if it returns correctly with correct values below 2010', () =>{
            expect(chooseYourCar.choosingType('Sedan', 'white', 2009)).to.equal(`This Sedan is too old for you, especially with that white color.`);
        });
    })

    describe('tests for 2-nd functionality (brandName)', () => {
        it('tests the brands input obj', () =>{
            expect(chooseYourCar.brandName.bind(chooseYourCar,'Something', 2)).to.throw("Invalid Information!");
        });
        it('tests brands input empty arr', () =>{
            expect(chooseYourCar.brandName.bind(chooseYourCar,['Something'], '2')).to.throw("Invalid Information!");
        });
        it('tests index above brands length', () =>{
            expect(chooseYourCar.brandName.bind(chooseYourCar,['something'], 2.1)).to.throw("Invalid Information!");
        });
        it('tests index above brands length', () =>{
            expect(chooseYourCar.brandName.bind(chooseYourCar,['something'], 1)).to.throw("Invalid Information!");
        });
        it('tests index above brands length', () =>{
            expect(chooseYourCar.brandName.bind(chooseYourCar,['something'], -1)).to.throw("Invalid Information!");
        });
        it('tests the correct work of the functionality', () => {
            expect(chooseYourCar.brandName(['BMW','Audi','Mercedes','VW','Toyota'], 3)).to.equal('BMW, Audi, Mercedes, Toyota');
        });
        it('tests the correct work of the functionality', () => {
            expect(chooseYourCar.brandName(['BMW','Audi','Mercedes','VW','Toyota'], 0)).to.equal('Audi, Mercedes, VW, Toyota');
        });
    })

    describe('tests for 3-rd functionality fuel Consumption', () => {
        it('tests if it throws error if the distance is NaN', () => {
            expect(chooseYourCar.carFuelConsumption.bind(chooseYourCar, '100', '7')).to.throw("Invalid Information!")
        });
        it('tests if it throws error if the distance below 0', () => {
            expect(chooseYourCar.carFuelConsumption.bind(chooseYourCar, 7, '7')).to.throw("Invalid Information!")
        });
        it('tests if it throws error if the distance below 0', () => {
            expect(chooseYourCar.carFuelConsumption.bind(chooseYourCar, '10', 7)).to.throw("Invalid Information!")
        });
        it('tests if it throws error if the distanceFuel in NaN', () => {
            expect(chooseYourCar.carFuelConsumption.bind(chooseYourCar, 0, 5)).to.throw("Invalid Information!")
        });
        it('tests if it throws error if the distanceFuel in NaN', () => {
            expect(chooseYourCar.carFuelConsumption.bind(chooseYourCar, 5, -1)).to.throw("Invalid Information!")
        });
        it('test if the output is correct with valid input above 7l/100km', () =>{
            expect(chooseYourCar.carFuelConsumption(100,10)).to.equal(`The car burns too much fuel - 10.00 liters!`);
        });
        it('tests if the output is correct with valid input below 7l/100km', () =>{
            expect(chooseYourCar.carFuelConsumption(250, 15)).to.equal(`The car is efficient enough, it burns 6.00 liters/100 km.`)
        });
        it('tests if the output is correct with valid input below 7l/100km', () =>{
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal(`The car is efficient enough, it burns 7.00 liters/100 km.`)
        });
        it('test if the output is correct with valid input above 7l/100km', () =>{
            expect(chooseYourCar.carFuelConsumption(300,37)).to.equal(`The car burns too much fuel - 12.33 liters!`);
        });
        it('tests if the output is correct with valid input below 7l/100km', () =>{
            expect(chooseYourCar.carFuelConsumption(100, 5)).to.equal(`The car is efficient enough, it burns 5.00 liters/100 km.`)
        });
    });
})