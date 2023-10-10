import calculateProbability from "../ProbablityCalculation";

describe('calculateProbability', () => {
  it('calculates the probability correctly', () => {
    // Test case 1: 3 out of 6 should yield a probability of 0.5
    expect(calculateProbability(3, 6)).toBe(0.5);

    // Test case 2: 1 out of 1 should yield a probability of 1
    expect(calculateProbability(1, 1)).toBe(1);

    // Test case 3: 0 out of 5 should yield a probability of 0
    expect(calculateProbability(0, 5)).toBe(0);
  });

  it('throws an error for invalid inputs', () => {
    // Test case 4: Passing negative numbers should throw an error
    expect(() => calculateProbability(-1, 5)).toThrow('Both favorableOutcomes and totalOutcomes must be non-negative numbers.');
    
    // Test case 5: Passing non-number values should throw an error
    expect(() => calculateProbability('2', 5)).toThrow('Both favorableOutcomes and totalOutcomes must be numbers.');
  });

  it('throws an error for probability outside the valid range', () => {
    // Test case 6: Favorable outcomes greater than total outcomes should throw an error
    expect(() => calculateProbability(6, 5)).toThrow('Probability must be between 0 and 1.');
  });
});