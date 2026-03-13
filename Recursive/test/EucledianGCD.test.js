import { euclideanGCDIterative as GCD } from "../EucledianGCD";

describe('EucledianGCD', () => {
    it('the GCD of 2 and 3 should be 1', () => {
        expect(GCD(2,3)).toBe(1);
    })
    it('the GCD of 2 and 8 should be 2', () => {
        expect(GCD(2,8)).toBe(2);
    })
    it('the GCD of 1 and 100 should be 1', () => {
        expect(GCD(1,100)).toBe(1);
    })
})