import formatPhoneNumber from '../FormatPhoneNumber'

describe('Testing the formatPhoneNumber functions', () => {
  it('expects to throw a type error', () => {
    expect(() => formatPhoneNumber('1234567')).toThrow('Invalid phone number!')
    expect(() => formatPhoneNumber('123456text')).toThrow(
      'Invalid phone number!'
    )
    expect(() => formatPhoneNumber(12345)).toThrow('Invalid phone number!')
  })

  it('expects to return the formatted phone number', () => {
    expect(formatPhoneNumber('1234567890')).toEqual('(123) 456-7890')
    expect(formatPhoneNumber('2124323322')).toEqual('(212) 432-3322')
    expect(formatPhoneNumber('1721543455')).toEqual('(172) 154-3455')
  })
})
