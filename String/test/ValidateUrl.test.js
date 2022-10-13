import { validateURL } from '../ValidateUrl'

describe('ValidateUrl', () => {
  test.each([
    ['http://www.google.com'],
    ['https://www.google.com'],
    ['www.google.com'],
    ['google.com'],
    ['http://wwwdomain.com']

  ])('Should return validate=true for URL %s', (n) => {
    expect(validateURL(n)).toBe(true)
  })

  test.each([
    ['google'],
    ['link: https://www.google.com'],
    ['www.foufos'],
    ['http://foufos'],
    ['www.mp3#.com'],
    ['www.-foufos.gr']
  ])('Should return validate=false for URL %s', (n) => {
    expect(validateURL(n)).toBe(false)
  })
})
