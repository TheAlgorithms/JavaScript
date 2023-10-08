import { FormatDuration } from '../FormatDuration' // Import the function from your file

describe(FormatDuration, () => {
  const testCase = [
    [123456789, '1 day, 10 hours, 17 minutes, 36 seconds, 789 milliseconds'],
    [-123456789, '1 day, 10 hours, 17 minutes, 36 seconds, 789 milliseconds'],
    [60000, '1 minute'],
    [3600000, '1 hour'],
    [90061000, '1 day, 1 hour, 1 minute, 1 second'],
    [0, '']
  ]
  test.each(testCase)('formats milliseconds correctly', (ms, expected) => {
    expect(FormatDuration(ms)).toEqual(expected)
  })
})
