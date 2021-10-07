import { EulersTotient } from '../EulersTotient'

describe('EulersTotient', () => {
  it('should return 6 as 1, 2, 4, 5, 7, and 8 are coprime to 9', () => {
    expect(EulersTotient(9)).toBe(6)
  })

  it('should return 4 as 1, 3, 7, and 9 are coprime to 10', () => {
    expect(EulersTotient(10)).toBe(4)
  })
})
