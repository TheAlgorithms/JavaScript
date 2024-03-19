import { findSmallestMultiple } from '../Problem005.js'

describe('Smallest Multiple', () => {
  // Project Euler Condition Check
  test('the smallest number divisible by the numbers from 1 to 20', () => {
    expect(findSmallestMultiple()).toBe(232792560)
  })
})
