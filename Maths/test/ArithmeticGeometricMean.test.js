import { agm } from '../ArithmeticGeometricMean.js'

describe('Tests for AGM', () => {
  it('should be a function', () => {
    expect(typeof agm).toEqual('function')
  })

  it('number of parameters should be 2', () => {
    expect(agm.length).toEqual(2)
  })

  const m = 0x100 // scale for rand

  it('should return NaN if any or all params has a negative argument', () => {
    // I multiplied by minus one, because the sign inversion is more clearly visible
    expect(agm(-1 * Math.random() * m, Math.random() * m)).toBe(NaN)
    expect(agm(Math.random() * m, -1 * Math.random() * m)).toBe(NaN)
    expect(agm(-1 * Math.random() * m, -1 * Math.random() * m)).toBe(NaN)
  })

  it('should return Infinity if any arg is Infinity and the other is not 0', () => {
    expect(agm(Math.random() * m + 1, Infinity)).toEqual(Infinity)
    expect(agm(Infinity, Math.random() * m + 1)).toEqual(Infinity)
    expect(agm(Infinity, Infinity)).toEqual(Infinity)
  })

  it('should return NaN if some arg is Infinity and the other is 0', () => {
    expect(agm(0, Infinity)).toBe(NaN)
    expect(agm(Infinity, 0)).toBe(NaN)
  })

  it('should return +0 if any or all args are +0 or -0, and return -0 if all are -0', () => {
    expect(agm(Math.random() * m, 0)).toBe(0)
    expect(agm(0, Math.random() * m)).toBe(0)
    expect(agm(Math.random() * m, -0)).toBe(0)
    expect(agm(-0, Math.random() * m)).toBe(0)
    expect(agm(0, -0)).toBe(0)
    expect(agm(-0, 0)).toBe(0)
    expect(agm(-0, -0)).toBe(-0)
  })

  it('should return NaN if any or all args are NaN', () => {
    expect(agm(Math.random() * m, NaN)).toBe(NaN)
    expect(agm(NaN, Math.random() * m)).toBe(NaN)
    expect(agm(NaN, NaN)).toBe(NaN)
  })

  it('should return an accurate approximation of the AGM between 2 valid input args', () => {
    // all the constants are provided by WolframAlpha
    expect(agm(1, 2)).toBeCloseTo(1.4567910310469068)
    expect(agm(2, 256)).toBeCloseTo(64.45940719438667)
    expect(agm(55555, 34)).toBeCloseTo(9933.4047239552)
    // test "unsafe" numbers
    expect(agm(2 ** 48, 3 ** 27)).toBeCloseTo(88506556379265.7)
  })
})
