import { SimpleInterest } from '../SimpleIntrest'

describe('Testing Simple Interest Rate calculate function', () => {
  it('should 750 for principal = 5000, rate = 5%, time = 3 yrs', () => {
    expect(SimpleInterest(5000, 5, 3)).toBe(750)
  })
  it('should 750 for principal = 1000, rate = 3%, time = 2 yrs', () => {
    expect(SimpleInterest(10000, 3, 2)).toBe(600)
  })
  it('should 750 for principal = 40000, rate = 0.1%, time = 10 yrs', () => {
    expect(SimpleInterest(40000, 0.1, 10)).toBe(400)
  })
})
