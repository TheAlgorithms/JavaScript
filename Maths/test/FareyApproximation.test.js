import { fareyApproximation } from '../FareyApproximation'

describe('fareyApproximation', () => {
  it('Return Farey Approximation of 0.7538385', () => {
    const approx = fareyApproximation(0.7538385)
    expect(approx).toBe({ numerator: 52, denominator: 69 })
  })

  it('Return Farey Approximation of 0.23584936', () => {
    const approx = fareyApproximation(0.23584936)
    expect(approx).toBe({ numerator: 196, denominator: 831 })
  })
})
