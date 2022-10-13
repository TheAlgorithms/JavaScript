import { validateURL } from '../ValidateUrl'

describe('ValidateUrl', () => {
  test.each([
    ['http://www.google.com', true],
    ['https://www.google.com', true],
    ['www.google.com', true],
    ['google.com', true],
    ['http://wwwdomain.com', true]

  ])('Should return validate=true for URL %s', (n, expected) => {
    expect(validateURL(n)).toBe(expected)
  })

  test.each([
    ['google', false],
    ['link: https://www.google.com', false]

  ])('Should return validate=false for URL %s', (n, expected) => {
    expect(validateURL(n)).toBe(expected)
  })
})
