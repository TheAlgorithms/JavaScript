import { NumberOfLocalMaximumPoints } from '../NumberOfLocalMaximumPoints'

describe('LocalMaximomPoint tests', () => {
  it('test boundry maximom points - last element', () => {
    const Array = [1, 2, 3, 4, 5, 6, 12]
    expect(NumberOfLocalMaximumPoints(Array)).toEqual(1)
  })

  it('test boundry maximom points - first element', () => {
    const Array = [13, 6, 5, 4, 3, 2, 1]
    expect(NumberOfLocalMaximumPoints(Array)).toEqual(1)
  })

  it('test boundry maximom points - both boundries have maximum points', () => {
    // Test a mix of number types (i.e., positive/negative, numbers with decimals, fractions)
    const Array = [13, 2, 3, 4, 5, 6, 12]
    expect(NumberOfLocalMaximumPoints(Array)).toEqual(2)
  })

  it('multiple maximom points in the middle', () => {
    // Test a mix of number types (i.e., positive/negative, numbers with decimals, fractions)
    const Array = [1, 3, 2, 5, 6, 9, 2, 7, 12, 1, 0]
    expect(NumberOfLocalMaximumPoints(Array)).toEqual(3)
  })

  it('multiple maximom points in the middle with one at end', () => {
    // Test a mix of number types (i.e., positive/negative, numbers with decimals, fractions)
    const Array = [1, 3, 2, 5, 6, 9, 2, 7, 12, 1, 10]
    expect(NumberOfLocalMaximumPoints(Array)).toEqual(4)
  })

  it('multiple maximom points in the middle with one at start', () => {
    // Test a mix of number types (i.e., positive/negative, numbers with decimals, fractions)
    const Array = [10, 3, 2, 5, 6, 9, 2, 7, 12, 1, 0]
    expect(NumberOfLocalMaximumPoints(Array)).toEqual(3)
  })

  it('multiple maximom points in the middle with two more at both ends', () => {
    // Test a mix of number types (i.e., positive/negative, numbers with decimals, fractions)
    const Array = [10, 3, 11, 5, 6, 9, 2, 7, 12, 1, 10]
    expect(NumberOfLocalMaximumPoints(Array)).toEqual(5)
  })
})
