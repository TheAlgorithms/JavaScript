import { isEven } from './IsEven'

// Returns the value of x to the power of n (x^n)
const powLogarithmic = (x, n) => {
  if (n === 0) return 1
  const result = powLogarithmic(x, Math.floor(n / 2))
  if (isEven(n)) {
    return result * result
  }
  return result * result * x
}

export { powLogarithmic }
