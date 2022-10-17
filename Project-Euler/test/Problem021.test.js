import { sumAmicableNums } from '../Problem021.js'

describe('Amicable numbers', () => {
  // Project Euler Condition Check
  test('if the limit is 10000', () => {
    expect(sumAmicableNums(10000)).toBe(31626)
  })
})
