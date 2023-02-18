describe('task mototcycle rider', () => {

    it('tests licenseRestriction(category) correct',() => {
        expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
        expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
        expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
        expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.');
    });
    it('tests licenseRestriction(category) errors',() => {
        expect(() => {motorcycleRider.licenseRestriction('B2')}).to.throw("Invalid Information!");
    });

    it('tests motorcycleShowroom(engineVolume, maximumEngineVolume) errors', () => {
        expect(() => {motorcycleRider.motorcycleShowroom(['100','200','300'], '100')}).to.throw("Invalid Information!");
        expect(() => {motorcycleRider.motorcycleShowroom('100', 100)}).to.throw("Invalid Information!");
        expect(() => {motorcycleRider.motorcycleShowroom([], 100)}).to.throw("Invalid Information!");
        expect(() => {motorcycleRider.motorcycleShowroom(['100','200','300'], 45)}).to.throw("Invalid Information!");
    });
    it('tests motorcycleShowroom(engineVolume, maximumEngineVolume) correct',() => {
        expect(motorcycleRider.motorcycleShowroom(['100','200','300'], 300)).to.equal(`There are 3 available motorcycles matching your criteria!`);
        expect(motorcycleRider.motorcycleShowroom(['100','200','300'], 150)).to.equal(`There are 1 available motorcycles matching your criteria!`);
        expect(motorcycleRider.motorcycleShowroom(['45','200','300'], 200)).to.equal(`There are 1 available motorcycles matching your criteria!`);
        expect(motorcycleRider.motorcycleShowroom(['50','200','300'], 100)).to.equal(`There are 1 available motorcycles matching your criteria!`);
    });

    it('tests otherSpendings(equipment, consumables, discount) errors',() =>{
        expect(() =>{motorcycleRider.otherSpendings(['helmet','jacked'],['engine oil', 'oil filter'],10)}).to.throw("Invalid Information!");
        expect(() =>{motorcycleRider.otherSpendings('string',['engine oil', 'oil filter'],false)}).to.throw("Invalid Information!");
        expect(() =>{motorcycleRider.otherSpendings(['helmet','jacked'],'string',false)}).to.throw("Invalid Information!");
    });
    it('tests for otherSpendings(equipment, consumables, discount) correct', () =>{
        expect(motorcycleRider.otherSpendings(['helmet','jacked'],['engine oil', 'oil filter'],false)).to.equal('You spend $600.00 for equipment and consumables!')
    });
    it('tests for otherSpendings(equipment, consumables, discount) correct', () =>{
        expect(motorcycleRider.otherSpendings(['helmet','jacked'],['engine oil', 'oil filter'],ture)).to.equal('You spend $540.00 for equipment and consumables with 10% discount!')
    });
});