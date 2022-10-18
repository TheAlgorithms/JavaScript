import { Reverse } from '../Reverse.js'
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
})
