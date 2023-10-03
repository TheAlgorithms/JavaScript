// https://projecteuler.net/problem=2
const SQ5 = 5 ** 0.5 // Square root of 5
const PHI = (1 + SQ5) / 2 // definition of PHI

// theoretically it should take O(1) constant amount of time as long
// arithmetic calculations are considered to be in constant amount of time
export const EvenFibonacci = (limit) => {
  if (limit < 1)
    throw new Error("Fibonacci sequence limit can't be less than 1")

  const highestIndex = Math.floor(Math.log(limit * SQ5) / Math.log(PHI))
  const n = Math.floor(highestIndex / 3)
  return Math.floor(
    ((PHI ** (3 * n + 3) - 1) / (PHI ** 3 - 1) -
      ((1 - PHI) ** (3 * n + 3) - 1) / ((1 - PHI) ** 3 - 1)) /
      SQ5
  )
}
