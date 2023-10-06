import caesarCipher from '../CaesarCipher'

describe('Testing the caesarsCipher function', () => {
  it('Test - 1, Testing for invalid types', () => {
    expect(() => caesarCipher(false, 3)).toThrow()
    expect(() => caesarCipher('false', -1)).toThrow()
    expect(() => caesarCipher('true', null)).toThrow()
  })

  it('Test - 2, Testing for valid string and rotation', () => {
    expect(caesarCipher('middle-Outz', 2)).toBe('okffng-Qwvb')
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 3)).toBe(
      'defghijklmnopqrstuvwxyzabc'
    )
    expect(caesarCipher('Always-Look-on-the-Bright-Side-of-Life', 5)).toBe(
      'Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj'
    )
    expect(
      caesarCipher('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', 23)
    ).toBe('QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD')
  })
})
