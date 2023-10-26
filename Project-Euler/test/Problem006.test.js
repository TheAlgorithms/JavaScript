import { squareDifference } from '../Problem006.js'

describe('Square Difference', () => {
  test('difference between the sum of the squares of the first ten natural numbers and the square of the sum', () => {
    expect(squareDifference(10)).toBe(2640)
  })
  // Project Euler Condition Check
  test('difference between the sum of the squares of the first one hundred natural numbers and the square of the sum', () => {
    expect(squareDifference()).toBe(25164150)
  })
})
