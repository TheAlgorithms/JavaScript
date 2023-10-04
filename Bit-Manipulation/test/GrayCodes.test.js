import { generateGrayCodes } from '../GrayCodes.js' 

/**
 * Test cases for the generateGrayCodes function.
 */
const testCases = [
  { n: 0, expected: [0] },
  { n: 1, expected: [0, 1] },
  { n: 2, expected: [0, 1, 3, 2] },
  { n: 3, expected: [0, 1, 3, 2, 6, 7, 5, 4] },
  { n: 4, expected: [0, 1, 3, 2, 6, 7, 5, 4, 12, 13, 15, 14, 10, 11, 9, 8] },
];

testCases.forEach(({ n, expected }) => {
  test(`Generate Gray codes for n=${n}`, () => {
    const grayCodes = generateGrayCodes(n);
    expect(grayCodes).toEqual(expected);
  });
});
