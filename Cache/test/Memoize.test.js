import { memoize } from '../Memoize'

const fibonacci = (n) => {
  if (n < 2) {
    return n
  }

  return fibonacci(n - 2) + fibonacci(n - 1)
}

const factorial = (n) => {
  if (n === 0) {
    return 1
  }

  return n * factorial(n - 1)
}

describe('Memoize', () => {
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
})
