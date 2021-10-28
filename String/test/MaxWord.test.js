import { maxWord } from '../MaxWord'

describe('Testing the maxWord function', () => {
  it('Expect throw with non string argument', () => {
    expect(() => maxWord(10)).toThrow()
  })
  it('get the max word', () => {
    const string = 'be be be be a a banana'
    const mostOccurringWord = maxWord(string)
    expect(mostOccurringWord).toBe('be')
  })
})
