import { getLuckyNumbers } from '../LuckyNumbers.js'

describe('getLuckyNumbers', () => {
  test('getLuckyNumbers(1) returns [1]', () => {
    expect(getLuckyNumbers(1)).toEqual([1])
  })

  test('getLuckyNumbers(10) returns [1, 3, 7, 9]', () => {
    expect(getLuckyNumbers(10)).toEqual([1, 3, 7, 9])
  })

  test('getLuckyNumbers(20) returns correct list', () => {
    expect(getLuckyNumbers(20)).toEqual([1, 3, 7, 9, 13, 15])
  })

  test('all results are within limit', () => {
    const result = getLuckyNumbers(50)
    expect(result.every((n) => n <= 50)).toBe(true)
  })

  test('result is sorted in ascending order', () => {
    const result = getLuckyNumbers(50)
    expect(result).toEqual([...result].sort((a, b) => a - b))
  })

  test('1 is always a lucky number', () => {
    expect(getLuckyNumbers(10)[0]).toBe(1)
  })

  test('getLuckyNumbers(50) has correct count', () => {
    expect(getLuckyNumbers(50)).toHaveLength(13)
  })

  test('throws TypeError for zero', () => {
    expect(() => getLuckyNumbers(0)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => getLuckyNumbers(-10)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => getLuckyNumbers(10.5)).toThrow(TypeError)
  })
})
