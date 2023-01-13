import { MinMax } from '../MinMax'

describe('MinMax', () => {
  it('should return 65 for MinMax([90, 23, 6, 33, 21, 65, 123, 34423],0,0,true)', () => {
    const _newMinMax = new MinMax([90, 23, 6, 33, 21, 65, 123, 34423], 0, 0, true)
    _newMinMax.get_ans()
    expect(_newMinMax.answer).toEqual(65)
  })

  it('should return 12 for MinMax([3, 5, 2, 9, 12, 5, 23, 23],0,0,true)', () => {
    const _newMinMax = new MinMax([3, 5, 2, 9, 12, 5, 23, 23], 0, 0, true)
    _newMinMax.get_ans()
    expect(_newMinMax.answer).toEqual(12)
  })

  it('should throw RangeError for empty Board', () => {
    expect(() => {
      return new MinMax([], 0, 0, true).toThrow(RangeError)
    })
  })

  it('should throw RangeError for negative depth', () => {
    expect(() => {
      return new MinMax([12, 23, 434, 66, 6776], -1, 0, true).toThrow(
        RangeError
      )
    })
  })
})
