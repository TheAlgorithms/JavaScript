import { sigmoid } from '../Sigmoid.js'

describe('sigmoid', () => {
  it('should calculate the Sigmoid value correctly for a positive number', () => {
    expect(sigmoid(1)).toBeCloseTo(0.7310585786300049, 10)
  })

  it('should calculate the Sigmoid value correctly for zero', () => {
    expect(sigmoid(0)).toBe(0.5)
  })

  it('should calculate the Sigmoid value correctly for a negative number', () => {
    expect(sigmoid(-1)).toBeCloseTo(0.2689414213699951, 10)
  })

  it('should calculate the Sigmoid value correctly for a large positive number', () => {
    expect(sigmoid(10)).toBeCloseTo(0.9999546021312976, 10)
  })

  it('should calculate the Sigmoid value correctly for a large negative number', () => {
    expect(sigmoid(-10)).toBeCloseTo(4.5397868702434395e-5, 10)
  })
})
