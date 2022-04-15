import maxCharacter from '../MaxCharacter'

describe('Testing the maxCharacter function', () => {
  it('Expect throw with wrong arg', () => {
    expect(() => maxCharacter(123)).toThrow()
  })

  it('Check the max character in string', () => {
    const theString = 'I can\'t do that'
    const maxCharInAllCount = maxCharacter(theString, false)
    const maxChar = maxCharacter(theString)

    expect(maxCharInAllCount).toBe(' ')
    expect(maxChar).toBe('t')

    expect(maxCharacter('!!!Hello, World!!!', /[a-z]/g)).toBe('!')

    expect(maxCharacter('!!!Hello, World!!!', /[^a-z]/gi)).toBe('l')
  })
})
