import { generateGrayCodes } from '../GrayCodes.js' 

/**
 * Test cases for the generateGrayCodes function.
 */

test('Generate Gray codes for n=3', () => {
  const n = 3
  const expectedGrayCodes = [0, 1, 3, 2, 6, 7, 5, 4]
  const grayCodes = generateGrayCodes(n)
  expect(grayCodes).toEqual(expectedGrayCodes)
})
test('Generate Gray codes for n=0', () => {
    const n = 0;
    const expectedGrayCodes = [0];
    const grayCodes = generateGrayCodes(n);
    expect(grayCodes).toEqual(expectedGrayCodes);
  });
  
  test('Generate Gray codes for n=1', () => {
    const n = 1;
    const expectedGrayCodes = [0, 1];
    const grayCodes = generateGrayCodes(n);
    expect(grayCodes).toEqual(expectedGrayCodes);
  });
  
  test('Generate Gray codes for n=4', () => {
    const n = 4;
    const expectedGrayCodes = [
      0, 1, 3, 2, 6, 7, 5, 4, 12, 13, 15, 14, 10, 11, 9, 8
    ];
    const grayCodes = generateGrayCodes(n);
    expect(grayCodes).toEqual(expectedGrayCodes);
  });
  
  test('Generate Gray codes for n=5', () => {
    const n = 5;
    const expectedGrayCodes = [
      0, 1, 3, 2, 6, 7, 5, 4, 12, 13, 15, 14, 10, 11, 9, 8, 24, 25, 27, 26, 30, 31, 29, 28, 20, 21, 23, 22, 18, 19, 17, 16
    ];
    const grayCodes = generateGrayCodes(n);
    expect(grayCodes).toEqual(expectedGrayCodes);
  });
