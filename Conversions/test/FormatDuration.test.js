import { FormatDuration, msToDuration } from '../FormatDuration' // Import the function from your file

describe(FormatDuration, () => {
  const testCase = [
    [123456789, '1 day, 10 hours, 17 minutes, 36 seconds, 789 milliseconds'],
    [60000, '1 minute'],
    [3600000, '1 hour'],
    [90061000, '1 day, 1 hour, 1 minute, 1 second'],
    [0, ''],
    [-100, '']
  ]
  test.each(testCase)('formats milliseconds correctly', (ms, expected) => {
    expect(FormatDuration(ms)).toEqual(expected)
  })
})
describe(msToDuration, () => {
  const testCase = [
    [1000, '0:00:01'],
    [3000, '0:00:03'],
    [60000, '0:01:00'],
    [3661000, '1:01:01'],
    [3600000, '1:00:00'],
    [0, '0:00:00'],
    [-1000, 'Duration must be non-negative']
  ]
  test.each(testCase)('formats duration correctly', (ms, expected) => {
    expect(msToDuration(ms)).toEqual(expected)
  })
})
