import { answer } from '../Problem053.js'

describe('Number of values of nCr that exceed 1 million when n is in a certain range', () => {
  test('range is 10 to 100', () => {
    expect(answer(10,100)).toBe(4075)
  })
  test('range is 1 to 150', () => {
    expect(answer(1,150)).toBe(10000)
  })
})
