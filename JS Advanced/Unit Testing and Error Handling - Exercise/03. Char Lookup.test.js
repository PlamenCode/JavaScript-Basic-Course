const lookupChar = require('./03. Char Lookup');
let expect = require('chai').expect;

describe('Task 03.CharLookup', () => {
    describe('test of the input', () => {
        it('test when type == string',() => {
            expect(lookupChar('hello',3)).to.equal('l');
        })
        it('test when index == not integer',() => {
            expect(lookupChar('hello',3.4)).to.equal(undefined);
        })
        it('test when type == []',() => {
            expect(lookupChar([],3)).to.equal(undefined);
        })
        it('test when type length <= index',() => {
            expect(lookupChar('hello',5)).to.equal("Incorrect index");
        })
        it('test when index < 0',() => {
            expect(lookupChar('hello',-2)).to.equal("Incorrect index");
        })     
    })
})