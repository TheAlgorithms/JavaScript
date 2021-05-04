import { formatPhoneNumber } from './FormatPhoneNumber'

describe('PhoneNumberFormatting', () => {
  it('expects to return the formatted phone number', () => {
    expect(formatPhoneNumber('1234567890')).toEqual('(123) 456-7890')
  })

  it('expects to return the formatted phone number', () => {
    expect(formatPhoneNumber(1234567890)).toEqual('(123) 456-7890')
  })

  it('expects to throw a type error', () => {
    expect(() => { formatPhoneNumber('1234567') }).toThrow('Invalid phone number.')
  })

  it('expects to throw a type error', () => {
    expect(() => { formatPhoneNumber('123456text') }).toThrow('Invalid phone number.')
  })

  it('expects to throw a type error', () => {
    expect(() => { formatPhoneNumber(12345) }).toThrow('Invalid phone number.')
  })
})
