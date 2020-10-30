import { validateEmail } from '../ValidateEmail'

describe('Validation of an Email Address', () => {
  it('expects to return false', () => {
    expect(validateEmail('mahfoudh.arous.com')).toEqual(false)
  })

  it('expects to return false', () => {
    expect(validateEmail('mahfoudh.arous@com')).toEqual(false)
  })

  it('expects to return true', () => {
    expect(validateEmail('mahfoudh.arous@gmail.com')).toEqual(true)
  })

  it('expects to return true', () => {
    expect(validateEmail('icristianbaciu@.helsinki.edu')).toEqual(true)
  })

  it('expects to throw a type error', () => {
    expect(() => { validateEmail('') }).toThrow('Email Address String Null or Empty.')
  })
})
