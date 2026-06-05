import { returnOnInvestment } from '../ReturnOnInvestment'

describe('returnOnInvestment', () => {
  test('positive ROI when gain exceeds cost', () => {
    expect(returnOnInvestment(1000, 500)).toBe(100)
  })

  test('zero ROI when gain equals cost', () => {
    expect(returnOnInvestment(500, 500)).toBe(0)
  })

  test('negative ROI when gain is less than cost', () => {
    expect(returnOnInvestment(200, 500)).toBe(-60)
  })

  test('total loss when gain is zero', () => {
    expect(returnOnInvestment(0, 500)).toBe(-100)
  })

  test('throws RangeError for zero cost', () => {
    expect(() => returnOnInvestment(1000, 0)).toThrow(RangeError)
  })

  test('throws RangeError for negative cost', () => {
    expect(() => returnOnInvestment(1000, -100)).toThrow(RangeError)
  })

  test('throws TypeError for non-number gain', () => {
    expect(() => returnOnInvestment('1000', 500)).toThrow(TypeError)
  })

  test('throws TypeError for non-number cost', () => {
    expect(() => returnOnInvestment(1000, '500')).toThrow(TypeError)
  })
})
