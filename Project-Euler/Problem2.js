const SQ5 = 5 ** 0.5
// Square root of 5

const PHI = (1 + SQ5) / 2
// definition of PHI

// theoretically it should take O(1) constant amount of time as long
// arithmetic calculations are considered to be in constant amount of time
function EvenFibonacci (limit) {
  const highestIndex = Math.floor(Math.log(limit * SQ5) / Math.log(PHI))
  const n = Math.floor(highestIndex / 3)
  return ((PHI ** (3 * n + 3) - 1) / (PHI ** 3 - 1) -
    ((1 - PHI) ** (3 * n + 3) - 1) / ((1 - PHI) ** 3 - 1)) / SQ5
}
console.log(EvenFibonacci(4e6))
// Sum of Even Fibonnaci upto 4 Million
