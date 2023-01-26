const sum = require('./4. Sum of Numbers');
let expect = require('chai').expect;


describe('task 04.SumOfNumbers', ()=>{
    it('tests if it returns corectly', () => {
        let nums = [10,20,30,40,50];

        let recievedSum = sum(nums);
        let expectedSum = 150;

        expect(recievedSum).to.equal(expectedSum);
    });

    it('tests if it returns corectly with one negative num', () => {
        let nums = [10,20,30,40,-50];

        let recievedSum = sum(nums);
        let expectedSum = 50;

        expect(recievedSum).to.equal(expectedSum);
    });

    it('tests if it returns corectly if the nums are Strings', () => {
        let nums = ['10','20','30','40','50'];

        let recievedSum = sum(nums);
        let expectedSum = 150;

        expect(recievedSum).to.equal(expectedSum);
    });

    it('tests if it returns zero with zero length arr', () =>{
        let nums = [];
        
        let recievedSum = sum(nums);
        let expectedSum = 0;

        expect(recievedSum).to.equal(expectedSum);
    })
})