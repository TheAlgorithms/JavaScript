/**
 * Pollard’s Rho Algorithm for Integer Factorization
 *
 * Pollard’s Rho is a probabilistic algorithm for integer factorization, especially effective for large composite numbers.
 * Reference: https://en.wikipedia.org/wiki/Pollard%27s_rho_algorithm
 */

function gcd(a, b) {
  while (b !== 0) {
    ;[a, b] = [b, a % b]
  }
  return a
}

/**
 * Returns a non-trivial factor of n, or n if n is prime
 * @param {number} n - Integer to factor
 * @returns {number} - A non-trivial factor of n
 */
export function pollardsRho(n) {
  if (n % 2 === 0) return 2
  let x = 2,
    y = 2,
    d = 1,
    f = (v) => (v * v + 1) % n
  while (d === 1) {
    x = f(x)
    y = f(f(y))
    d = gcd(Math.abs(x - y), n)
  }
  return d === n ? n : d
}

// Example usage:
// const n = 8051;
// console.log(pollardsRho(n)); // Output: a non-trivial factor of 8051
