import { binarySearchIterative, binarySearchRecursive } from '../BinarySearch'

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const stringArr = [
  'Alpha',
  'Bravo',
  'Charlie',
  'Delta',
  'Echo',
  'Foxtrot',
  'Golf',
  'Hotel',
  'India',
  'Juliet',
  'Kilo',
  'Lima',
  'Mike',
  'November',
  'Oscar',
  'Papa',
  'Quebec',
  'Romeo',
  'Sierra',
  'Tango',
  'Uniform',
  'Victor',
  'Whiskey',
  'X-Ray',
  'Yankee',
  'Zulu'
]

describe('Binary Search', () => {
  const funcs = [binarySearchIterative, binarySearchRecursive]
  for (const func of funcs) {
    test('expect to return the index of the item in the array', () => {
      expect(func(arr, 3)).toBe(2)
    })
    test('expect to return -1 if not in array', () => {
      expect(func(arr, 11)).toBe(-1)
    })
    test('expect to return the index of the item in the array', () => {
      expect(func(stringArr, 'Charlie')).toBe(2)
    })
    test('expect to return -1 if not in array', () => {
      expect(func(stringArr, 'Zoft')).toBe(-1)
    })
  }
})
