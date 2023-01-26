const rgbToHexColor = require('./06. RGB to Hex');
let expect = require('chai').expect;

describe('Task 06.RGBtoHex', () => {
    it('tests if it works with valid input(10,10,10)', () => {
        expect(rgbToHexColor(10,10,10)).to.equal('#0A0A0A');
    })
    it('tests the lowest possible combination (0,0,0)', () => {
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    })
    it('tests the heighest possible combination(255,255,255)', () => {
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
    })

    it('tests if it returns undefined with negative num', () => {
        expect(rgbToHexColor(-10,0,0)).to.equal(undefined);
    })

    it('tests if it returns undefined with negative num', () => {
        expect(rgbToHexColor(0,0,-10)).to.equal(undefined);
    })

    it('tests if it returns undefined with negative num', () => {
        expect(rgbToHexColor(0,-10,0)).to.equal(undefined);
    })

    it('tests if it returns undefined with heigher num than 255', () => {
        expect(rgbToHexColor(300,0,0)).to.equal(undefined);
    })

    it('tests if it returns undefined string in the input', () => {
        expect(rgbToHexColor('300',0,0)).to.equal(undefined);
    })

    it('tests if it returns undefined with fractional num', () => {
        expect(rgbToHexColor(12.5,10,10)).to.equal(undefined);
    })

    it('tests if it returns undefined without input', () => {
        expect(rgbToHexColor()).to.be.undefined;
    })
})