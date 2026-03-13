/**
 * @function lcm
 * @description Compute the least common multiple (LCM) of two integers.
 * @param {number} a - first integer
 * @param {number} b - second integer
 * @return {number} LCM of a and b
 * @example lcm(4,6) -> 12
 * @example lcm(7,3) -> 21
 */
const gcd = (x, y) => {
  let a = Math.abs(x)
  let b = Math.abs(y)
  if (Number.isNaN(a) || Number.isNaN(b)) throw new TypeError('Argument is NaN - Not a Number')
  while (b !== 0) {
    const t = a % b
    a = b
    b = t
  }
  return a
}

const lcm = (a, b) => {
  const na = Number(a)
  const nb = Number(b)

  if (Number.isNaN(na) || Number.isNaN(nb) || typeof a === 'object' || typeof b === 'object') {
    throw new TypeError('Argument is NaN - Not a Number')
  }

  if (na === 0 || nb === 0) return 0

  // lcm(a,b) = |a * b| / gcd(a,b)
  return Math.abs((na / gcd(na, nb)) * nb)
}

export { lcm }
