import { countNumberWordLength } from '../Problem017.js'

describe('Number letter count', () => {
  const textFixture = [
    {
      name: 'should throw invalid input (NaN) error',
      input: 'test',
      error: 'Invalid input, please provide valid number'
    },
    {
      name: 'should throw error if number < 1',
      input: 0,
      error: 'Please provide number greater that 1'
    },
    {
      name: 'if the number provided is 5',
      input: 5,
      expected: 19
    },
    {
      name: 'if the number provided is 100',
      input: 100,
      expected: 864
    },
    {
      name: 'if the number provided is 1000',
      input: 1000,
      expected: 21124
    }
  ]

  for (const tt of textFixture) {
    test(tt.name, () => {
      if (tt.error) {
        expect(() => countNumberWordLength(tt.input)).toThrowError(tt.error)
      } else {
        expect(countNumberWordLength(tt.input)).toBe(tt.expected)
      }
    })
  }
})
