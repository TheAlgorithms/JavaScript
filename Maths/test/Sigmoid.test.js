import { sigmoid } from '../Sigmoid.js'

describe('sigmoid', () => {
  const testCases = [
    [1, 0.7310585786300049],
    [0, 0.5],
    [-1, 0.2689414213699951],
  ];

  test.each(testCases)('should calculate the Sigmoid value correctly for %i', (input, expected) => {
    expect(sigmoid(input)).toBeCloseTo(expected, 10);
  });
});
