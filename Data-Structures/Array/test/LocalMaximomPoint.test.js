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

  it('test inner points - repeated local maxima', () => {
    const Array2 = [1, 5, 5, 5, 3, 2, 1]
    const result = LocalMaximomPoint(Array2)
    expect([1, 2, 3]).toContain(result)
  })

  it('test inner points - alternating peaks and valleys', () => {
    const Array2 = [1, 3, 2, 4, 3, 5, 4]
    const result = LocalMaximomPoint(Array2)
    expect([1, 3, 5]).toContain(result)
  })
})
