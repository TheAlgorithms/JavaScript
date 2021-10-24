import { lucas } from '../LucasSeries'

describe('Nth Lucas Number', () => {
  it('should return the 20th Lucas Number', () => {
    expect(lucas(20)).toBe(15127)
  })

  it('should return the 20th Lucas Number', () => {
    expect(lucas(0)).toBe(2)
  })

  it('should return the 20th Lucas Number', () => {
    expect(lucas(100)).toBe(792070839848372100000)
  })
})
