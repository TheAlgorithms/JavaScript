import { firstTriangularWith500Divisors } from '../Problem012'

describe('checkFirstTriangularWith500Divisors()', () => {
  it('Problem Statement Answer', () => {
    const firstTriangular = firstTriangularWith500Divisors()
    expect(firstTriangular).toBe(76576500)
  })
})
