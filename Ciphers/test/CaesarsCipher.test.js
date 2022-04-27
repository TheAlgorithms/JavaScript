import caesarsCipher from '../CaesarsCipher'

describe('Testing the caesarsCipher function', () => {
  it('Test - 1, Testing for invalid types', () => {
    expect(() => caesarsCipher(false, 3)).toThrow()
    expect(() => caesarsCipher('false', -1)).toThrow()
    expect(() => caesarsCipher('true', null)).toThrow()
  })

  it('Test - 2, Testing for valid string and rotation', () => {
    expect(caesarsCipher('middle-Outz', 2)).toBe('okffng-Qwvb')
    expect(caesarsCipher('abcdefghijklmnopqrstuvwxyz', 3)).toBe('defghijklmnopqrstuvwxyzabc')
    expect(caesarsCipher('Always-Look-on-the-Bright-Side-of-Life', 5)).toBe('Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj')
    expect(caesarsCipher('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', 23)).toBe('QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD')
  })
})
