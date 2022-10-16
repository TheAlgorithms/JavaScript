/**
 * @function collatz
 * @description Applies the Collatz Sequence on a specified number.
 * The Collatz Sequence states that every natural number will always fall in a 1, 2, 4 loop when iterated under the following function:
 * If the number is even, divide by 2, and if its odd, multiply it by 3 and add 1.
 *
 * @parama {Integer} n The number to apply the Collatz Sequence to.
 *
 * @return An array of steps and the final result..
 *
 * @see [Collatz Conjecture](https://en.wikipedia.org/wiki/Collatz_conjecture)
 *
 * @example collatz(1) = { result: 1, steps: [] }
 * @example collatz(5) = { result: 1, steps: [16, 8, 4, 2, 1] }
*/
export function collatz (n) {
  const steps = []

  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2
    } else {
      n = 3 * n + 1
    }

    steps.push(n)
  }

  return { result: n, steps }
}
