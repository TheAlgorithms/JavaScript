import { rotateRight, rotateLeft } from '../RotateArray.js'

describe('rotateRight', () => {
  it('should rotate array to the right by k positions', () => {
    expect(rotateRight([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3])
    expect(rotateRight([1, 2, 3], 1)).toEqual([3, 1, 2])
  })

  it('should handle rotation count larger than array length', () => {
    expect(rotateRight([1, 2, 3], 5)).toEqual([2, 3, 1])
    expect(rotateRight([1], 10)).toEqual([1])
  })

  it('should return empty array for empty input', () => {
    expect(rotateRight([], 3)).toEqual([])
  })

  it('should handle zero rotation', () => {
    expect(rotateRight([1, 2, 3], 0)).toEqual([1, 2, 3])
  })

  it('should throw TypeError for invalid inputs', () => {
    expect(() => rotateRight('not an array', 1)).toThrow(TypeError)
    expect(() => rotateRight([1, 2, 3], -1)).toThrow(TypeError)
    expect(() => rotateRight([1, 2, 3], 1.5)).toThrow(TypeError)
  })
})

describe('rotateLeft', () => {
  it('should rotate array to the left by k positions', () => {
    expect(rotateLeft([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5, 1, 2])
    expect(rotateLeft([1, 2, 3], 1)).toEqual([2, 3, 1])
  })

  it('should handle rotation count larger than array length', () => {
    expect(rotateLeft([1, 2, 3], 5)).toEqual([3, 1, 2])
    expect(rotateLeft([1], 10)).toEqual([1])
  })

  it('should return empty array for empty input', () => {
    expect(rotateLeft([], 3)).toEqual([])
  })

  it('should handle zero rotation', () => {
    expect(rotateLeft([1, 2, 3], 0)).toEqual([1, 2, 3])
  })

  it('should throw TypeError for invalid inputs', () => {
    expect(() => rotateLeft('not an array', 1)).toThrow(TypeError)
    expect(() => rotateLeft([1, 2, 3], -1)).toThrow(TypeError)
    expect(() => rotateLeft([1, 2, 3], 1.5)).toThrow(TypeError)
  })
})
