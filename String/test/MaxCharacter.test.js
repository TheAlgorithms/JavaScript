import maxCharacter from '../MaxCharacter'

describe('Testing the maxCharacter function', () => {
  it('Expect throw with wrong arg', () => {
    expect(() => maxCharacter(123)).toThrow()
    expect(() => maxCharacter('')).toThrow()
  })

  it('Check the max character in string', () => {
    const theString = "I can't do that"
    const maxCharInAllCount = maxCharacter(theString)
    const maxChar = maxCharacter(theString, /\s/)

    expect(maxCharInAllCount).toBe(' ')
    expect(maxChar).toBe('t')

    expect(maxCharacter('!!!Hello, World!!!', /[a-z]/)).toBe('!')

    expect(maxCharacter('!!!Hello, World!!!', /[^a-z]/i)).toBe('l')
  })
})
