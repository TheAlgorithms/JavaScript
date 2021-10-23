import { loopLucas } from '../LucasSeries'

describe('Nth Lucas Number', () => {
  it('should return the 20th Lucas Number', () => {
    expect(loopLucas(20)).toBe(15127)
  })
})
