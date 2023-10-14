import { binaryEquivalent } from "../BinaryEquivalent";

describe("BinaryEquivalent", () => {
    it('The binary equivalent of 2 should be "10"', () => {
        expect(binaryEquivalent(2)).toBe("10");
    })
    it('The binary equivalent of 0 should be "0"', () => {
        expect(binaryEquivalent(0)).toBe("0");
    })
    it('The binary equivalent of 543 should be "1000011111"', () => {
        expect(binaryEquivalent(543)).toBe("1000011111");
    })
    it('The binary equivalent of 4697621023 should be "100011000000000000000001000011111"', () => {
        expect(binaryEquivalent(4697621023)).toBe("100011000000000000000001000011111");
    })
})