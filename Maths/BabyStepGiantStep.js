/**
 * Baby-step giant-step discrete logarithm modulo a prime.
 * https://en.wikipedia.org/wiki/Baby-step_giant-step
 *
 * Solves base^x ≡ target (mod modulus) for the smallest non-negative x.
 */

/**
 * @param {number} base
 * @param {number} target
 * @param {number} modulus prime (or modulus where base is invertible)
 * @returns {number} smallest non-negative discrete log
 */
export function babyStepGiantStep(base, target, modulus) {
  if (
    typeof base !== 'number' ||
    typeof target !== 'number' ||
    typeof modulus !== 'number' ||
    !Number.isInteger(base) ||
    !Number.isInteger(target) ||
    !Number.isInteger(modulus)
  ) {
    throw new TypeError('Arguments must be integers')
  }
  if (modulus <= 1) throw new RangeError('modulus must be > 1')

  base = ((base % modulus) + modulus) % modulus
  target = ((target % modulus) + modulus) % modulus

  if (target === 1) return 0
  if (base === 0) {
    if (target === 0) return 1
    throw new RangeError('no discrete log')
  }

  const modPow = (b, e, mod) => {
    let r = 1
    b = ((b % mod) + mod) % mod
    while (e > 0) {
      if (e % 2 === 1) r = (r * b) % mod
      b = (b * b) % mod
      e = Math.floor(e / 2)
    }
    return r
  }

  const m = Math.ceil(Math.sqrt(modulus - 1))
  const baby = new Map()
  let value = 1
  for (let j = 0; j < m; j++) {
    if (!baby.has(value)) baby.set(value, j)
    value = (value * base) % modulus
  }

  // factor = base^{-m} mod modulus (Fermat inverse assumes prime modulus)
  const invBase = modPow(base, modulus - 2, modulus)
  const factor = modPow(invBase, m, modulus)

  let gamma = target
  for (let i = 0; i < m; i++) {
    if (baby.has(gamma)) {
      return i * m + baby.get(gamma)
    }
    gamma = (gamma * factor) % modulus
  }

  throw new RangeError('no discrete log')
}
