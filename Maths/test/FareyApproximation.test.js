import { fareyApproximation } from '../FareyApproximation'

describe('fareyApproximation', () => {
  it('Return Farey Approximation of 0.7538385', () => {
    const approx = fareyApproximation(0.7538385)
    expect(approx).toBe({ numerator: 22, denominator: 29 })
  })

  it('Return Farey Approximation of 0.23584936', () => {
    const approx = fareyApproximation(0.23584936)
    expect(approx).toBe({ numerator: 13, denominator: 55 })
  })
})
