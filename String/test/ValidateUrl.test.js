import { validateURL } from '../ValidateUrl'

describe('ValidateUrl', () => {
  it('expects to return false', () => {
    expect(validateURL('google')).toEqual(false)
    expect(validateURL('link: https://www.google.com')).toEqual(false)
  })

  it('expects to return true', () => {
    expect(validateURL('http://www.google.com')).toEqual(true)
    expect(validateURL('https://www.google.com')).toEqual(true)
    expect(validateURL('www.google.com')).toEqual(true)
  })
})
