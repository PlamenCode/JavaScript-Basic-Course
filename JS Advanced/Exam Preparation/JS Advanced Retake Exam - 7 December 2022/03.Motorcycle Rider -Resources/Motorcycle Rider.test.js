const motorcycleRider = require('./Motorcycle Rider');
let expect = require('chai').expect;


describe('licenseRestriction category of motorcycle', () =>{
    it('tests for AM', ()=>{
        expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.')
    });
    it('tests for A1', ()=>{
        expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.')
    });
    it('tests for A2', ()=>{
        expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.')
    });
    it('tests for A', ()=>{
        expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.')
    });
    it('tests for input diff string', ()=>{
        expect(motorcycleRider.licenseRestriction.bind(motorcycleRider, 'A3')).to.throw("Invalid Information!");
    })
    it('tests for input num', ()=>{
        expect(motorcycleRider.licenseRestriction.bind(motorcycleRider, 10)).to.throw("Invalid Information!");
    })
    it('tests for input no input', ()=>{
        expect(motorcycleRider.licenseRestriction.bind(motorcycleRider)).to.throw("Invalid Information!");
    })
    it('tests for input array', ()=>{
        expect(motorcycleRider.licenseRestriction.bind(motorcycleRider, ['asd'])).to.throw("Invalid Information!");
    })
    it('tests for input Null', ()=>{
        expect(motorcycleRider.licenseRestriction.bind(motorcycleRider, null)).to.throw("Invalid Information!");
    });
    it('tests for input NaN', ()=>{
        expect(motorcycleRider.licenseRestriction.bind(motorcycleRider, NaN)).to.throw("Invalid Information!");
    })
    it('tests for input undefined', ()=>{
        expect(motorcycleRider.licenseRestriction.bind(motorcycleRider, undefined)).to.throw("Invalid Information!");
    })
})


describe('motorcycleShowroom category of motorcycle', ()=>{
    it('tests max eng volume', ()=>{
        expect(motorcycleRider.motorcycleShowroom.bind(['100','200','300'], '100')).to.throw("Invalid Information!");
    });
    it('tests max eng volume arr', ()=>{
        expect(motorcycleRider.motorcycleShowroom.bind(['100','200','300'], [])).to.throw("Invalid Information!");
    });
    it('tests max eng volume NaN', ()=>{
        expect(motorcycleRider.motorcycleShowroom.bind(['100','200','300'], NaN)).to.throw("Invalid Information!");
    });
    it('tests eng volume not arr', ()=>{
        expect(motorcycleRider.motorcycleShowroom.bind(300, 500)).to.throw("Invalid Information!");
    });
    it('tests max eng volume', ()=>{
        expect(motorcycleRider.motorcycleShowroom.bind(['100','200', '300'], 45)).to.throw("Invalid Information!");
    });
    it('tests eng volume not arr', ()=>{
        expect(motorcycleRider.motorcycleShowroom.bind(NaN, 500)).to.throw("Invalid Information!");
    });
    it('tests max eng volume below 20', ()=>{
        expect(motorcycleRider.motorcycleShowroom.bind(['100','200','300'], 20)).to.throw("Invalid Information!");
    });
    it('tests eng volume empty arr', ()=>{
        expect(motorcycleRider.motorcycleShowroom.bind([], 500)).to.throw("Invalid Information!");
    });
    it('tests engineVolume values ',()=>{
        expect(motorcycleRider.motorcycleShowroom(['100','200','300'], 200)).to.equal(`There are 2 available motorcycles matching your criteria!`)
    });
    it('tests engineVolume values ',()=>{
        expect(motorcycleRider.motorcycleShowroom(['100','200','300'], 100)).to.equal(`There are 1 available motorcycles matching your criteria!`)
    });
    it('tests engineVolume values ',()=>{
        expect(motorcycleRider.motorcycleShowroom(['45','200','300'], 300)).to.equal(`There are 2 available motorcycles matching your criteria!`)
    });
    it('tests engineVolume values ',()=>{
        expect(motorcycleRider.motorcycleShowroom(['45','200','300'], 100)).to.equal(`There are 0 available motorcycles matching your criteria!`)
    });
});

describe('otherSpendings tests', () => {
    it('tests equipment, consumables, discount 1',() => {
        expect(motorcycleRider.otherSpendings.bind('string',[],true)).to.throw("Invalid Information!");
    });
    it('tests equipment, consumables, discount 1',() => {
        expect(motorcycleRider.otherSpendings.bind(null,[],true)).to.throw("Invalid Information!");
    }); 
    it('tests equipment, consumables, discount 1',() => {
        expect(motorcycleRider.otherSpendings.bind(10,[],true)).to.throw("Invalid Information!");
    }); 
    it('tests equipment, consumables, discount 2',() => {
        expect(motorcycleRider.otherSpendings.bind([],undefined,true)).to.throw("Invalid Information!");
    }); 
    it('tests equipment, consumables, discount 2',() => {
        expect(motorcycleRider.otherSpendings.bind([],10,true)).to.throw("Invalid Information!");
    }); 
    it('tests equipment, consumables, discount 2',() => {
        expect(motorcycleRider.otherSpendings.bind([],{},true)).to.throw("Invalid Information!");
    }); 
    it('tests equipment, consumables, discount 3',() => {
        expect(motorcycleRider.otherSpendings.bind([],[],10)).to.throw("Invalid Information!");
    }); 
    it('tests equipment, consumables, discount 3',() => {
        expect(motorcycleRider.otherSpendings.bind([],[],'true')).to.throw("Invalid Information!");
    }); 
    it('tests equipment, consumables, discount 3',() => {
        expect(motorcycleRider.otherSpendings.bind([],[],NaN)).to.throw("Invalid Information!");
    }); 
    it('tests equipment, consumables, discount ',() => {
        expect(motorcycleRider.otherSpendings.bind([],[],true)).to.throw("Invalid Information!");
    }); 
    it('tests equipment, consumables without discount ',()=>{
        expect(motorcycleRider.otherSpendings(['helmet','jacked','gloves'],['engine oil','oil filter','water'],false)).to.equal(`You spend $600.00 for equipment and consumables!`)
    });
    it('tests equipment, consumables without discount ',()=>{
        expect(motorcycleRider.otherSpendings(['helmet'],['engine oil'],false)).to.equal(`You spend $270.00 for equipment and consumables!`)
    });
    it('tests equipment, consumables with discount ',()=>{
        expect(motorcycleRider.otherSpendings(['helmet'],['engine oil'],true)).to.equal("You spend $243.00 for equipment and consumables with 10% discount!")
    });
    it('tests equipment, consumables with discount ',()=>{
        expect(motorcycleRider.otherSpendings(['helmet','jacked','gloves'],['engine oil','oil filter','water'],true)).to.equal(`You spend $540.00 for equipment and consumables!`)
    });
});