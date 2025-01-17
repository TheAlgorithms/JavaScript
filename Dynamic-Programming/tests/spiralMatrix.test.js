import { expect } from 'vitest'
import spiralMatrix from '../spiralMatrix'

describe('spiralMatrix', () => {
  test('should return spiral matrix', () => {
    const result = spiralMatrix(3)
    const expected = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5]
    ]

    expect(result.length).toBe(expected.length)

    for (let i = 0; i < expected.length; i++) {
      for (let j = 0; j < expected[i].length; j++) {
        expect(result[i][j]).toBe(expected[i][j])
      }
    }
  })
});
