import { maxCharacter } from './MaxCharacter'

describe('Testing the maxCharacter function', () => {
  it('Expect throw with wrong arg', () => {
    expect(() => maxCharacter(123)).toThrow()
  })
  it('Check the max character in string', () => {
    const theString = 'I can\'t do that'
    const maxChar = maxCharacter(theString)
    expect(maxChar).toBe('t')
  })
})
