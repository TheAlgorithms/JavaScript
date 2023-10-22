import { houseRobber } from '../HouseRobber'

describe('houseRobber', () => {
  it('expects to return 0 when argument is empty array', () => {
    expect(houseRobber([])).toBe(0)
  })

  it('expects to return element at index 0 when argument is array of length one', () => {
    expect(houseRobber([9])).toBe(9)
  })

  it('expects to return greater number when argument is an array of length two', () => {
    expect(houseRobber([3, 6])).toBe(6)
  })

  it('expects to return the maximum loot possible', () => {
    expect(houseRobber([1, 2, 3, 1])).toBe(4)
    expect(houseRobber([2, 7, 9, 3, 1])).toBe(12)
  })
})
