import { tugOfWar } from './tugOfWar';

describe('tugOfWar', () => {
    it('should divide array into two subsets with minimized sum difference', () => {
        const arr = [3, 4, 5, -3, 100, 1, 89, 54, 23, 20];
        const [subset1, subset2] = tugOfWar(arr);
        const diff = Math.abs(subset1.reduce((a, b) => a + b, 0) - subset2.reduce((a, b) => a + b, 0));
        
        expect(diff).toBeLessThanOrEqual(1);  // Assume that the difference could be 0 or 1 for this test case.
    });

    // You can add more test cases
});