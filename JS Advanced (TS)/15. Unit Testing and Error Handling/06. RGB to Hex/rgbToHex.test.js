const { expect } = require('chai');
const rgbToHexColor = require('./rgbToHex.js').rgbToHexColor;

describe('rgbToHexColor', () => {
    it('should return the correct color in HEX format', () => {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    });

    it('should return undefined if the input parameters are of invalid type', () => {
        expect(rgbToHexColor('255', 255, 255)).to.be.undefined;
        expect(rgbToHexColor(255, [255], 255)).to.be.undefined;
        expect(rgbToHexColor(255, 255, {b: 255})).to.be.undefined;
    });

    it('should return undefined if the input parameters are smaller than 0', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });

    it('should return undefined if the input parameters are bigger than 255', () => {
        expect(rgbToHexColor(999, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 999, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 999)).to.be.undefined;
    });
});