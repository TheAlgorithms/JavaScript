import { euclideanGCDIterative, euclideanGCDRecursive } from "../EucledianGCD";

describe('EucledianGCD', () => {
    it('the GCD of 2 and 3 should be 1', () => {
        expect(euclideanGCDIterative(2,3)).toBe(1);
        expect(euclideanGCDRecursive(2,3)).toBe(1);
    })
    it('the GCD of 2 and 8 should be 2', () => {
        expect(euclideanGCDIterative(2,8)).toBe(2);
        expect(euclideanGCDRecursive(2,8)).toBe(2);
    })
    it('the GCD of 1 and 100 should be 1', () => {
        expect(euclideanGCDIterative(1,100)).toBe(1);
        expect(euclideanGCDRecursive(1,100)).toBe(1);
    })
})