import { trap } from '../TrappingRainWater'

describe('TrappingRainWater', () => {
  it('expects 6 units of rain water are being trapped', () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6)
  })

  it('expects 9 units of rain water are being trapped', () => {
    expect(trap([4, 2, 0, 3, 2, 5])).toBe(9)
  })
})
