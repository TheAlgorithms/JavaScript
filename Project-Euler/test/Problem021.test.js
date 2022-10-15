import { sumAmicableNum } from '../Problem021.js'

describe('Amicable numbers', () => {
  // Project Euler Condition Check
  test('if the number is 10000', () => {
    expect(sumAmicableNum(10000)).toBe(31626)
  })
})
