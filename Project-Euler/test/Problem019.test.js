import { countSundays } from '../Problem019.js'

describe('Count Sundays', () => {
  test('when start year is 1801 and end year is 1900', () => {
    expect(countSundays(1801, 1900)).toBe(172)
  })
  // Project Euler Condition Check
  test('when start year is 1901 and end year is 2000', () => {
    expect(countSundays()).toBe(171)
  })
})
