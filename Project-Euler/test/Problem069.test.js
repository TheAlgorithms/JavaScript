import { answer } from '../Problem069.js'

describe('maximizing n/phi(n)', () => {
  // Project Euler Condition Check
  test('Maximum value for n <= 1000', () => {
    expect(problem44(1000)).toBe(210)
  })
  // Project Euler Second Value for Condition Check
  test('Maximum value for n <= 123456789', () => {
    expect(problem44(123456789)).toBe(9699690)
  })
})
