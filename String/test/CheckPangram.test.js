import { checkPangram } from '../CheckPangram'

describe('checkPangram', () => {
  it('"The quick brown fox jumps over the lazy dog" is a pangram', () => {
    expect(
      checkPangram('The quick brown fox jumps over the lazy dog')
    ).toBeTruthy()
  })

  it('"Waltz, bad nymph, for quick jigs vex." is a pangram', () => {
    expect(checkPangram('Waltz, bad nymph, for quick jigs vex.')).toBeTruthy()
  })

  it('"Jived fox nymph grabs quick waltz." is a pangram', () => {
    expect(checkPangram('Jived fox nymph grabs quick waltz.')).toBeTruthy()
  })

  it('"My name is Unknown" is NOT a pangram', () => {
    expect(checkPangram('My name is Unknown')).toBeFalsy()
  })

  it('"The quick brown fox jumps over the la_y dog" is NOT a pangram', () => {
    expect(
      checkPangram('The quick brown fox jumps over the la_y dog')
    ).toBeFalsy()
  })

  it('Throws an error if given param is not a string', () => {
    expect(() => {
      checkPangram(undefined)
    }).toThrow('The given value is not a string')
  })
})
