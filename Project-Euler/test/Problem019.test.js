import { countingSundays } from '../Problem019.js'

describe('checking Counting Sundays', () => {
  // Project Euler Condition Check
  test('Test Euler Condition', () => {
    expect(countingSundays()).toBe(171)
  })
})
