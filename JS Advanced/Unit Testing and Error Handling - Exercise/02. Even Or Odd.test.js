const isOddOrEven = require('./02. Even Or Odd');
let expect = require('chai').expect;

describe('Task 02.Even Or Odd', () => {
    it('tests if it returns undefined with num', () => {
        expect(isOddOrEven(10)).to.equal(undefined);
    });
    it('tests if it returns undefined with array', () => {
        expect(isOddOrEven([])).to.equal(undefined);
    });
    it('tests if it returns undefined with object', () => {
        expect(isOddOrEven({})).to.equal(undefined);
    });
    it('tests if it returns undefined with null', () => {
        expect(isOddOrEven(null)).to.equal(undefined);
    });
    it('tests if it returns even with even Input', () => {
        expect(isOddOrEven('Hi')).to.equal('even');
    });
    it('tests if it returns odd with odd Input', () => {
        expect(isOddOrEven('Hello')).to.equal('odd');
    });
})