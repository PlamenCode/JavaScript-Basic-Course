const mathEnforcer = require('./04. Math Enforcer');
let expect = require('chai').expect;

describe('Task 04.Math Enforcer', () => {

    describe('Tests of AddFive()', () => {
        it('tests if it works with correct input(num)', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
        it('tests if it returns undefined with string', () => {
            expect(mathEnforcer.addFive('5')).to.equal(undefined);
        });
        it('tests if it returns undefined with array', () => {
            expect(mathEnforcer.addFive([])).to.equal(undefined);
        });
        it('tests if it returns correct when add to a positive num', () => {
            expect(mathEnforcer.addFive(55)).to.equal(60);
        });
        it('tests if it returns correct when add to a negative num', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });
        it('tests if it returns correct when non integer values', () => {
            expect(mathEnforcer.addFive(-5.5)).to.equal(0.5);
        });
        it('tests if it returns correct when non integer values', () => {
            expect(mathEnforcer.addFive(5.5)).to.equal(10.5);
        });
        it('tests if it returns undefined with undefined', () => {
            expect(mathEnforcer.addFive(undefined)).to.equal(undefined);
        });
        it('tests if it returns undefined with empty', () => {
            expect(mathEnforcer.addFive()).to.equal(undefined);
        });
        it('tests if it returns undefined with NaN', () => {
            expect(mathEnforcer.addFive(Nan)).to.equal(undefined);
        });    
    })

    describe('Tests of subtractTen()', () => {
        it('tests if it works with correct input(num)', () => {
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
        });
        it('tests if it works with negative num', () => {
            expect(mathEnforcer.subtractTen(-20)).to.equal(-30);
        });
        it('tests if it returns undefined with string', () => {
            expect(mathEnforcer.subtractTen('20')).to.equal(undefined);
        });
        it('tests if it returns undefined with null', () => {
            expect(mathEnforcer.subtractTen(null)).to.equal(undefined);
        });
        it('tests if it returns undefined with undefined', () => {
            expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined);
        });
        it('tests if it returns correct when non integer values', () => {
            expect(mathEnforcer.subtractTen(-10.5)).to.equal(-20.5);
        });
        it('tests if it returns correct when non integer values', () => {
            expect(mathEnforcer.subtractTen(10.5)).to.equal(0.5);
        });
        it('tests if it returns undefined with NaN', () => {
            expect(mathEnforcer.subtractTen(NaN)).to.equal(undefined);
        });
        it('tests if it returns undefined with empty', () => {
            expect(mathEnforcer.subtractTen()).to.equal(undefined);
        });
    })

    describe('Tests of sum()', () => {
        it('tests if it works with correct input(num1, num2)', () => {
            expect(mathEnforcer.sum(20,10)).to.equal(30);
        });
        it('tests if it returns undefined with first num string', () => {
            expect(mathEnforcer.sum('20',10)).to.equal(undefined);
        });
        it('tests if it returns undefined with second num string', () => {
            expect(mathEnforcer.sum(20,'10')).to.equal(undefined);
        });
        it('tests if it returns undefined with both num string', () => {
            expect(mathEnforcer.sum('20','10')).to.equal(undefined);
        });
        it('tests if it returns undefined with first input undefined num string', () => {
            expect(mathEnforcer.sum(undefined,'10')).to.equal(undefined);
        });
        it('tests if it works with correct with 2 negative nums', () => {
            expect(mathEnforcer.sum(-20,-10)).to.equal(-30);
        });
        it('tests if it works with 1 negative and 1 poesitive', () => {
            expect(mathEnforcer.sum(-20,10)).to.equal(-10);
        });
        it('tests if it works with 1 negative and 1 poesitive', () => {
            expect(mathEnforcer.sum(20,-10)).to.equal(10);
        });
        it('tests if it works with 2 arrays', () => {
            expect(mathEnforcer.sum([20],[-10])).to.equal(undefined);
        });
        it('tests if it returns correct when non integer values', () => {
            expect(mathEnforcer.sum(10.5, 4.5)).to.equal(15);
        });
        it('tests if it returns correct when non integer values', () => {
            expect(mathEnforcer.sum(-10.5, -4.5)).to.equal(-15);
        });
        it('tests if it returns correct when non integer values', () => {
            expect(mathEnforcer.sum(10.5, -4.5)).to.equal(6);
        });
        it('tests if it returns undefined with NaN', () => {
            expect(mathEnforcer.sum(NaN,'10')).to.equal(undefined);
        });
        it('tests if it returns undefined with NaN', () => {
            expect(mathEnforcer.sum(10,NaN)).to.equal(undefined);
        });
        it('tests if it returns undefined with empty', () => {
            expect(mathEnforcer.sum(10)).to.equal(undefined);
        });
        it('tests if it returns undefined with empty', () => {
            expect(mathEnforcer.sum(10)).to.equal(undefined);
        });
    })
})