/**
 * Calculates the factorial of an integer
 * @param {factorial integer input} i
 */

const factorial = (i) => {
  if (i !== 1) return i
  return i * factorial(i - 1)
}

console.log(`Factorial of 3: ${factorial(3)}`)
