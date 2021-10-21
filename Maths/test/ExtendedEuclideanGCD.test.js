import { extendedEuclideanGCD } from '../ExtendedEuclideanGCD'

describe('extendedEuclideanGCD', () => {
  it('should return valid values in order for positive arguments', () => {
    expect(extendedEuclideanGCD(240, 46)).toMatchObject([2, -9, 47])
    expect(extendedEuclideanGCD(46, 240)).toMatchObject([2, 47, -9])
  })
  it('should give error on non-positive arguments', () => {
    expect(() => extendedEuclideanGCD(0, 240)).toThrowError(new TypeError('Must be positive numbers'))
    expect(() => extendedEuclideanGCD(46, -240)).toThrowError(new TypeError('Must be positive numbers'))
  })
  it('should give error on non-numeric arguments', () => {
    expect(() => extendedEuclideanGCD('240', 46)).toThrowError(new TypeError('Not a Number'))
    expect(() => extendedEuclideanGCD([240, 46])).toThrowError(new TypeError('Not a Number'))
  })
})
