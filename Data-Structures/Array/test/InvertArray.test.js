import { Reverse } from '../InvertArray.js'
import each from 'jest-each'

describe('reverse elements in an array', () => {
  each`
  array | expected
  ${[]} | ${[]}
  ${[1]} | ${[1]}
  ${[1, 2, 3, 4]} | ${[4, 3, 2, 1]}
  `.test('returns $expected when given $array', ({ array, expected }) => {
      expect(Reverse(array)).toEqual(expected)
    })
  it(' returns an empty array when array with 0 elements given', () => {
    expect(Reverse([])).toEqual([])
  })

  it('returns same array when array given has 1 element', () => {
    expect(Reverse([1])).toEqual([1])
  })

  it('returns inverted array when array given has +1 elements', () => {
    expect(Reverse([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4, 3, 2, 1])
  })
})
