// RSAAlgorithm.js

/**
 * Generates the greatest common divisor of two numbers.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} - The GCD of a and b.
 */
export function gcd(a, b) {
  if (b === 0) {
    return a
  }
  return gcd(b, a % b)
}

/**
 * Calculates modular inverse using Extended Euclidean Algorithm.
 * @param {number} e - The number to find inverse for.
 * @param {number} phi - The modulus.
 * @returns {number} - The modular inverse of e mod phi.
 */
export function modInverse(e, phi) {
  let [m0, x0, x1] = [phi, 0, 1]

  if (phi === 1) {
    return 0
  }

  while (e > 1) {
    let q = Math.floor(e / phi)
    ;[e, phi] = [phi, e % phi]
    ;[x0, x1] = [x1 - q * x0, x0]
  }

  if (x1 < 0) {
    x1 += m0
  }

  return x1
}

/**
 * Performs modular exponentiation.
 * @param {number} base - Base number.
 * @param {number} exponent - Exponent.
 * @param {number} modulus - Modulus.
 * @returns {number} - (base^exponent) % modulus.
 */
export function modPow(base, exponent, modulus) {
  if (modulus === 1) return 0
  let result = 1
  base = base % modulus

  while (exponent > 0) {
    if (exponent % 2 === 1) {
      result = (result * base) % modulus
    }
    exponent = Math.floor(exponent / 2)
    base = (base * base) % modulus
  }

  return result
}

/**
 * Generates RSA keys.
 * @param {number} p - A prime number.
 * @param {number} q - A prime number.
 * @returns {{publicKey: {e: number, n: number}, privateKey: {d: number, n: number}}}
 */
export function generateKeys(p, q) {
  const n = p * q
  const phi = (p - 1) * (q - 1)

  let e = 2
  while (e < phi && gcd(e, phi) !== 1) {
    e++
  }

  const d = modInverse(e, phi)

  return {
    publicKey: { e, n },
    privateKey: { d, n }
  }
}

/**
 * Encrypts a message with a public key.
 * @param {number} message - The message to encrypt (as a number).
 * @param {{e: number, n: number}} publicKey - The public key.
 * @returns {number} - The encrypted message.
 */
export function encrypt(message, publicKey) {
  return modPow(message, publicKey.e, publicKey.n)
}

/**
 * Decrypts a cipher with a private key.
 * @param {number} cipher - The encrypted message (cipher).
 * @param {{d: number, n: number}} privateKey - The private key.
 * @returns {number} - The decrypted message.
 */
export function decrypt(cipher, privateKey) {
  return modPow(cipher, privateKey.d, privateKey.n)
}
