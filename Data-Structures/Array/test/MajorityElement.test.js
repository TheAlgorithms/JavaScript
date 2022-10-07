import { findMajority } from '../MajorityElement'

describe('Majority element cases', () => {
  it('no majority element in array test', () => {
    const Array = [1, 2, 3, 4, 5]
    expect(findMajority(Array)).toEqual(-1)
  })
  it('test1 with majority', () => {
    const Array = [3, 3, 4, 2, 4, 4, 2, 4, 4]
    expect(findMajority(Array)).toEqual(4)
  })
  it('test2 with majority', () => {
    const Array = [3, 4, 2, 2, 2, 2, 2, 4]
    expect(findMajority(Array)).toEqual(2)
  })
})
