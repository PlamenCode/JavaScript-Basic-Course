const isSymmetric = require('./5. Check for Symmetry');
let expect = require('chai').expect;

describe('task 05.CheckForSymmtery', ()=>{
    it('tests if it catches non arrays', ()=>{
        let input = {};

        let expectedOutput = false;
        let recievedOutput = isSymmetric(input);

        expect(recievedOutput).to.equal(expectedOutput);
    });

    it('tests if it catches non arrays', ()=>{
        
        expect(isSymmetric(10)).to.equal(false);
        expect(isSymmetric("10")).to.equal(false);
        expect(isSymmetric(NaN)).to.equal(false);
        expect(isSymmetric(undefined)).to.equal(false);
        expect(isSymmetric(true)).to.equal(false);

    });

    it('tests if it returns true for symmetric input', ()=>{
        
        expect(isSymmetric([10,9,9,10])).to.equal(true);
        expect(isSymmetric(['a','b','c','c','b','a'])).to.equal(true);
        expect(isSymmetric([10,10,10,10])).to.equal(true);
    });

    it('tests if it returns false for non symmetric arrays', ()=>{
        
        expect(isSymmetric([10,9,8])).to.equal(false);
        expect(isSymmetric(["10",90,'90'])).to.equal(false);
        expect(isSymmetric(['a','b','b','c'])).to.equal(false);

    });

    it('tests if it returns false for non array with multiple elements', ()=>{
        
        expect(isSymmetric(10,9,8)).to.equal(false);
        expect(isSymmetric("10",90,'90')).to.equal(false);
        expect(isSymmetric('a','b','b','c')).to.equal(false);

    });
})
    
    