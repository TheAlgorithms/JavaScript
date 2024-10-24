const canMeasureWater = require('../Recursive/Water_jug_Problem');

describe('Water Jug Problem', () => {
    test('should return true when target amount is achievable', () => {
        expect(canMeasureWater(3, 5, 4)).toBe(true); // Known solution exists
    });

    test('should return false when target amount is not achievable', () => {
        expect(canMeasureWater(2, 6, 5)).toBe(false); // Impossible to measure 5 using 2 and 6
    });

    test('should return true when one of the jugs exactly matches the target', () => {
        expect(canMeasureWater(3, 5, 5)).toBe(true); // Exact match with jug 2
    });

    test('should return true when both jugs are enough to make the target', () => {
        expect(canMeasureWater(4, 3, 7)).toBe(true); // Combined total equals target
    });

    test('should return false when target amount exceeds both jug capacities combined', () => {
        expect(canMeasureWater(3, 5, 9)).toBe(false); // 9 exceeds the total capacity (3 + 5)
    });

    test('should return true for zero target', () => {
        expect(canMeasureWater(3, 5, 0)).toBe(true); // It's always possible to measure 0
    });
});
