import { generateGrayCodes } from '../GrayCodes.js' // Import the function

test('Generate Gray codes for n=3', () => {
  const n = 3
  const expectedGrayCodes = [0, 1, 3, 2, 6, 7, 5, 4]
  const grayCodes = generateGrayCodes(n)
  expect(grayCodes).toEqual(expectedGrayCodes)
})
