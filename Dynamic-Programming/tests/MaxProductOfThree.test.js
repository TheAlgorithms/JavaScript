import { maxProductOfThree } from '../MaxProductOfThree'

describe('MaxProductOfThree', () => {
  it('expects to throw error for array with only 2 numbers', () => {
    expect(() => {
      maxProductOfThree([1, 3])
    }).toThrow('Triplet cannot exist with the given array')
  })

  it('expects to return 300 as the maximum product', () => {
    expect(maxProductOfThree([10, 6, 5, 3, 1, -10])).toBe(300)
  })

  it('expects to return 300 as the maximum product', () => {
    expect(maxProductOfThree([10, -6, 5, 3, 1, -10])).toBe(600)
  })
})

// Tests using random arrays of size 3 to 5, with values rangin from -4 to 4
// The output is compared to a slower function that calculates all possible products of 3 numbers in the array and returns the largest one
describe('MaxProductOfThree, random arrays of size 3 to 5', () => {
  // Slower function that operates in O(n^3), where n is the length of the input array.
  // Calculates all possible products of 3 numbers in the array and returns the largest
  function completeMaxThree(array) {
    let maximumProduct = null
    for (let i = 0; i < array.length - 2; i++) {
      for (let j = i + 1; j < array.length - 1; j++) {
        for (let k = j + 1; k < array.length; k++) {
          const currentProduct = array[i] * array[j] * array[k]
          if (maximumProduct === null || currentProduct > maximumProduct) {
            maximumProduct = currentProduct
          }
        }
      }
    }
    return maximumProduct
  }

  // Set up consts for the tests
  const maxValue = 4
  const minValue = -4
  const maxLength = 5
  const minLength = 3
  const numberOfRandomTests = 5000

  // Run each test
  for (let i = 0; i < numberOfRandomTests; i++) {
    const arr = []
    // Randomize the length of the array in the current test
    const length = Math.floor(
      Math.random() * (maxLength - minLength) + minLength
    )

    // Fill the array with random values in the specified range
    for (let j = 0; j < length + 1; j++) {
      arr.push(Math.floor(Math.random() * (maxValue - minValue) + minValue))
    }

    // Calculate the actual max product, slow but completely
    const expectedProduct = completeMaxThree(arr)

    // Set up the expectation
    it(
      'Expect the array ' +
        arr.toString() +
        ' to return the maximum three product of ' +
        expectedProduct,
      () => {
        // Calculate the max three product using the function being tested
        const actualProduct = maxProductOfThree(arr)

        // Was unable to use expect().toBe(), since it sometimes compared 0 to -0, and that would not pass
        // At the same time, standardjs forbid me from checking for === -0 to convert to 0
        expect(actualProduct === expectedProduct).toBeTruthy()
      }
    )
  }
})
