import { getNarcissisticNumbers } from '../NarcissisticNumber.js'

describe('getNarcissisticNumbers', () => {
  test('single digits 1-9 are all narcissistic', () => {
    expect(getNarcissisticNumbers(9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  test('getNarcissisticNumbers(10) returns [1..9]', () => {
    expect(getNarcissisticNumbers(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  test('153 is narcissistic', () => {
    const result = getNarcissisticNumbers(153)
    expect(result).toContain(153)
  })

  test('370 is narcissistic', () => {
    const result = getNarcissisticNumbers(370)
    expect(result).toContain(370)
  })

  test('371 is narcissistic', () => {
    const result = getNarcissisticNumbers(371)
    expect(result).toContain(371)
  })

  test('407 is narcissistic', () => {
    const result = getNarcissisticNumbers(407)
    expect(result).toContain(407)
  })

  test('getNarcissisticNumbers(500) returns correct list', () => {
    expect(getNarcissisticNumbers(500)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407
    ])
  })

  test('100 is NOT narcissistic', () => {
    const result = getNarcissisticNumbers(100)
    expect(result).not.toContain(100)
  })

  test('throws TypeError for zero', () => {
    expect(() => getNarcissisticNumbers(0)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => getNarcissisticNumbers(-5)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => getNarcissisticNumbers(9.5)).toThrow(TypeError)
  })
})
