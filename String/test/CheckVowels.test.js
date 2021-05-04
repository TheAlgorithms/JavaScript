import { checkVowels } from './CheckVowels'

describe('Test the checkVowels function', () => {
  it('expect throws on use wrong param', () => {
    expect(() => checkVowels(0)).toThrow()
  })
  it('count the vowels in a string', () => {
    const value = 'Mad World'
    const countVowels = checkVowels(value)
    expect(countVowels).toBe(2)
  })
})
