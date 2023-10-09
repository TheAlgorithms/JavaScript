import { isAutomorphic } from '../AutomorphicNumber'

describe('AutomorphicNumber', () => {
  it('should throw Error when n is String', () => {
    expect(() => isAutomorphic('qwerty')).toThrow()
  })
  it('should throw Error when n is floating point', () => {
    expect(() => isAutomorphic(13.6)).toThrow()
  })
  it('should return false when n is negetive', () => {
    expect(isAutomorphic(-3)).toBeFalsy()
  })
  it('should return false when n is negetive', () => {
    expect(isAutomorphic(-25)).toBeFalsy()
  })
  it('should return false when n is 7', () => {
    expect(isAutomorphic(7)).toBeFalsy()
  })
  it('should return false when n is 83', () => {
    expect(isAutomorphic(83)).toBeFalsy()
  })
  it('should return true when n is 0', () => {
    expect(isAutomorphic(0)).toBeTruthy()
  })
  it('should return true when n is 1', () => {
    expect(isAutomorphic(1)).toBeTruthy()
  })
  it('should return true when n is 376', () => {
    expect(isAutomorphic(376)).toBeTruthy()
  })
  it('should return true when n is 90625', () => {
    expect(isAutomorphic(90625)).toBeTruthy()
  })
})
