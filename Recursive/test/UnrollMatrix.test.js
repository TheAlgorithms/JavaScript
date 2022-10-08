import { UnrollMatrix } from '../UnrollMatrix'

describe('UnrollMatrix', () => {
  const emptyMatrix = [
    []
  ]

  const evenMatrix = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7]
  ]

  const unevenMatrix = [
    [1, 2, 3, 4],
    [13, 14, 15, 16, 5],
    [12, 18, 17, 6],
    [11, 10, 9, 8, 7]
  ]

  const singleArrayMatrix = [
    [1, 2, 3, 4]
  ]

  const deeplyNestedMatrix = [
    [[[], [], [], [[], []]]],
    [[[[], [], []], [[], []]]],
    [[], [], [[], []], []],
    [[], [], [], [], [[[], [], []]]]
  ]

  it('should return matrix length of 0 when given an empty matrix', () => {
    expect(UnrollMatrix(emptyMatrix).length).toBe(0)
  })

  it('should return matrix length of 0 when given an even matrix', () => {
    expect(UnrollMatrix(evenMatrix).length).toBe(0)
  })

  it('should return matrix length of 0 when given an uneven matrix', () => {
    expect(UnrollMatrix(unevenMatrix).length).toBe(0)
  })

  it('should return matrix length of 0 when given a matrix with one array', () => {
    expect(UnrollMatrix(singleArrayMatrix).length).toBe(0)
  })

  it('should return matrix length of 0 when given a deeply nested matrix', () => {
    expect(UnrollMatrix(deeplyNestedMatrix).length).toBe(0)
  })
})
