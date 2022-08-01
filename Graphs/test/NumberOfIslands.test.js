import { islands } from '../NumberOfIslands'

describe('Number of Islands', () => {
  test('Graph with three islands', () => {
    const graph = [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1']
    ]
    expect(islands(graph)).toBe(3)
  })

  test('Graph with only one island', () => {
    const graph = [
      ['1', '1'],
      ['1', '1'],
      ['0', '0'],
      ['0', '0']
    ]
    expect(islands(graph)).toBe(1)
  })

  test('No islands', () => {
    const graph = [
      ['0', '0'],
      ['0', '0']
    ]
    expect(islands(graph)).toBe(0)
  })
})
