import { LocalMaximomPoint } from '../LocalMaximomPoint'

describe('LocalMaximumPoint tests', () => {
  it('test boundary maximum points - last element', () => {
    const Array = [1, 2, 3, 4, 5, 6, 12]
    expect(LocalMaximomPoint(Array)).toEqual(6)
  })

  it('test boundary maximum points - first element', () => {
    const Array2 = [13, 6, 5, 4, 3, 2, 1]
    expect(LocalMaximomPoint(Array2)).toEqual(0)
  })

  it('test boundary maximum points - should find first maximom point from the top', () => {
    // Test a mix of number types (i.e., positive/negative, numbers with decimals, fractions)
    const Array = [13, 2, 3, 4, 5, 6, 12]
    expect(LocalMaximomPoint(Array)).toEqual(6)
  })

  it('test inner points - second element', () => {
    const Array2 = [13, 16, 5, 4, 3, 2, 1]
    expect(LocalMaximomPoint(Array2)).toEqual(1)
  })

  it('test inner points - element some where in the middle', () => {
    const Array2 = [13, 16, 5, 41, 3, 2, 1]
    expect(LocalMaximomPoint(Array2)).toEqual(3)
  })

  it('test with positive and negative numbers', () => {
    const Array4 = [-4, -3, -2, -1, -5, 4, -1]
    expect(LocalMaximomPoint(Array4)).toEqual(3)
  })

  it('test with floating-point numbers', () => {
    const Array5 = [1.5, 3.5, 2.5, 0.5, -1.5, -3.5, -2.5]
    expect(LocalMaximomPoint(Array5)).toEqual(1)
  })
})
