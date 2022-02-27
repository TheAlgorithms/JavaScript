import { checkPangramRegex, checkPangramSet } from '../CheckPangram'

describe('Testing checkPangramRegex function', () => {
  it('"The quick brown fox jumps over the lazy dog" is a pangram', () => {
    expect(
      checkPangramRegex('The quick brown fox jumps over the lazy dog')
    ).toBe(true)
  })

  it('"Waltz, bad nymph, for quick jigs vex." is a pangram', () => {
    expect(checkPangramRegex('Waltz, bad nymph, for quick jigs vex.')).toBe(true)
  })

  it('"Jived fox nymph grabs quick waltz." is a pangram', () => {
    expect(checkPangramRegex('Jived fox nymph grabs quick waltz.')).toBe(true)
  })

  it('"My name is Unknown" is NOT a pangram', () => {
    expect(checkPangramRegex('My name is Unknown')).toBe(false)
  })

  it('"The quick brown fox jumps over the la_y dog" is NOT a pangram', () => {
    expect(
      checkPangramRegex('The quick brown fox jumps over the la_y dog')
    ).toBe(false)
  })

  it('Throws an error if given param is not a string', () => {
    expect(() => {
      checkPangramRegex(undefined)
    }).toThrow('The given value is not a string')
  })
})

describe('Testing checkPangramSet function', () => {
  it('"The quick brown fox jumps over the lazy dog" is a pangram', () => {
    expect(
      checkPangramSet('The quick brown fox jumps over the lazy dog')
    ).toBe(true)
  })

  it('"Waltz, bad nymph, for quick jigs vex." is a pangram', () => {
    expect(checkPangramSet('Waltz, bad nymph, for quick jigs vex.')).toBe(true)
  })

  it('"Jived fox nymph grabs quick waltz." is a pangram', () => {
    expect(checkPangramSet('Jived fox nymph grabs quick waltz.')).toBe(true)
  })

  it('"My name is Unknown" is NOT a pangram', () => {
    expect(checkPangramSet('My name is Unknown')).toBe(false)
  })

  it('"The quick brown fox jumps over the la_y dog" is NOT a pangram', () => {
    expect(
      checkPangramSet('The quick brown fox jumps over the la_y dog')
    ).toBe(false)
  })

  it('Throws an error if given param is not a string', () => {
    expect(() => {
      checkPangramSet(undefined)
    }).toThrow('The given value is not a string')
  })
})
