import { MatrixExponentiationRecursive } from '../MatrixExponentiationRecursive'

describe('MatrixExponentiationRecursive', () => {
  it.each([0, 1, 2, 2 ** 31, 2 ** 32, Number.MAX_SAFE_INTEGER])(
    'should preserve the exponent %i without signed 32-bit truncation',
    (exponent) => {
      const matrix = [
        [1, 1],
        [0, 1]
      ]
      expect(MatrixExponentiationRecursive(matrix, exponent)).toEqual([
        [1, exponent],
        [0, 1]
      ])
      expect(matrix).toEqual([
        [1, 1],
        [0, 1]
      ])
    }
  )
})
