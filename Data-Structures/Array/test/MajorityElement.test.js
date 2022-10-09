import { findMajorityElement } from '../MajorityElement'

describe('Majority element cases', () => {
  it('no majority element in array test', () => {
    expect(findMajorityElement([1, 2, 3, 4, 5])).toEqual(-1)
  })
  it('One majority element present', () => {
    expect(findMajorityElement([3, 3, 4, 2, 4, 4, 2, 4, 4])).toEqual(4)
  })
  it('Majority element when array elements are exactly equal to n/2 ', () => {
    const Array = [3, 4, 2, 2, 2, 2, 8, 4]
    expect(findMajorityElement(Array)).toEqual(-1)
  })
})
