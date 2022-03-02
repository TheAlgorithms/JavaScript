import { memoize } from '../Memoize'
import { fibonacci } from '../../Dynamic-Programming/FibonacciNumber'
import { factorial } from '../../Recursive/Factorial'

const multipleFactorials = (arr) => arr.map(factorial)

/**
 * @title implementation of union function
 * @param {Set} sets
 * @return {new Set}
 */
function union (...sets) {
  return new Set(
    sets.reduce((flatArray, set) => [...flatArray, ...set], [])
  )
}

describe('Testing Memoize', () => {
  it('expects the fibonacci function to use the cache on the second call', () => {
    const memoFibonacci = memoize(fibonacci)

    expect(memoFibonacci(5)).toEqual(fibonacci(5))
    expect(memoFibonacci(5)).toEqual(5)
    expect(memoFibonacci(10)).toEqual(fibonacci(10))
    expect(memoFibonacci(10)).toEqual(55)
  })

  it('expects the factorial function to use the cache on the second call', () => {
    const memoFactorial = memoize(factorial)

    expect(memoFactorial(5)).toEqual(factorial(5))
    expect(memoFactorial(5)).toEqual(120)
    expect(memoFactorial(10)).toEqual(factorial(10))
    expect(memoFactorial(10)).toEqual(3628800)
  })

  it('expects the multipleFactorials function to use the cache on the second call', () => {
    const memoMultipleFactorials = memoize(multipleFactorials)
    const input = [2, 3, 4, 5]

    expect(memoMultipleFactorials(input)).toEqual([2, 6, 24, 120])
    expect(memoMultipleFactorials(input)).toEqual(multipleFactorials(input))
  })

  it('expects the multipleFactorials function to use the cache on the second call', () => {
    const memoMultipleFactorials = memoize(multipleFactorials)
    const input = [2, 3, 4, 5]

    expect(memoMultipleFactorials(input)).toEqual([2, 6, 24, 120])
    expect(memoMultipleFactorials(input)).toEqual(multipleFactorials(input))
  })

  it('expects the union function to use the cache on the second call', () => {
    const memoUnion = memoize(union)
    const inputs = [
      new Set([1, 2, 3]),
      new Set([4, 3, 2]),
      new Set([5, 3, 6])
    ]

    expect(memoUnion(...inputs)).toEqual(new Set([1, 2, 3, 4, 5, 6]))
    expect(memoUnion(...inputs)).toEqual(union(...inputs))
  })
})
