import { isAutomorphic } from '../AutomorphicNumber'

describe('AutomorphicNumber', () => {
  it('should throw Error when n is String', () => {
    expect(() => isAutomorphic('qwerty')).toThrow()
  })
  it('should throw Error when n is floating point', () => {
    expect(() => isAutomorphic(13.6)).toThrow()
  })

  test.each([
    { n: -3, expected: false },
    { n: -25, expected: false }
  ])('should return false when n is negetive', ({ n, expected }) => {
    expect(isAutomorphic(n)).toBe(false)
  })

  test.each([
    { n: 7, expected: false },
    { n: 83, expected: false },
    { n: 0, expected: true },
    { n: 1, expected: true },
    { n: 376, expected: true },
    { n: 90625, expected: true }
  ])('should return $expected when n is $n', ({ n, expected }) => {
    expect(isAutomorphic(n)).toBe(expected)
  })
})
