import { findSmallestMultiple } from '../Problem005.js'

describe.concurrent('Find smallest multiple', () => {
  test('if max divisor is 10', () => {
    expect(findSmallestMultiple(10)).toBe(2520)
  })
  test('if max divisor is 15', () => {
    expect(findSmallestMultiple(15)).toBe(360360)
  })

  // Project Euler Condition Check
  test('if max divisor is 20', () => {
    expect(findSmallestMultiple(20)).toBe(232792560)
  })
})
