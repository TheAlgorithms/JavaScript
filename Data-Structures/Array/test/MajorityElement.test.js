import { FindMajority } from '../MajorityElement'

describe('Majority element cases', () => {
  it('no majority element in array test', () => {
    const Array = [1, 2, 3, 4, 5]
    expect(FindMajority(Array)).toEqual(-1)
  })
})
