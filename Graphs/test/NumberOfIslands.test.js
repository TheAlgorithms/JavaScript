import { islands } from '../NumberOfIslands'

describe('Number of Islands', () => {
  test('Test Case 1', () => {
    const graph = [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1']
    ]
    const result = islands(graph)
    expect(result).toBe(3)
  })

  test('Test Case 2', () => {
    const graph = [
      ['1', '1'],
      ['1', '1'],
      ['0', '0'],
      ['0', '0']
    ]
    const result = islands(graph)
    expect(result).toBe(1)
  })

  test('Test Case 3', () => {
    const graph = [
      ['0', '0'],
      ['0', '0']
    ]
    const result = islands(graph)
    expect(result).toBe(0)
  })
})
