const checkExceedingString = require('./CheckExceedingString')

describe('check exceeding string', () => {
  it('expect to throw an error if input is not a string', () => {
    expect(() => checkExceedingString(null)).toThrow()
  })

  it('expects to return true if the input is exceeding string', () => {
    const value = 'abcdef'
    const result = checkExceedingString(value)
    expect(result).toBe(true)
  })

  it('expects to return false if the input is not in camel case format', () => {
    const value = 'happy'
    const result = checkExceedingString(value)
    expect(result).toBe(false)
  })
})
