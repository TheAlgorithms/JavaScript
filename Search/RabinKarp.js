/*
 * Implements the Rabin-Karp algorithm for pattern searching.
 *
 * The Rabin-Karp algorithm is a string searching algorithm that uses hashing to find patterns in strings.
 * It is faster than naive string matching algorithms because it avoids comparing every character in the text.
 *
 * This implementation uses a rolling hash function to efficiently compute the hash values of substrings.
 * It also uses a modulo operator to reduce the size of the hash values, which helps to prevent hash collisions.
 *
 * The algorithm returns an array of indices where the pattern is found in the text. If the pattern is not
 * found, the algorithm returns an empty array.
 *
 * [Reference](https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm)
 */

const BASE = 256 // The number of characters in the alphabet
const MOD = 997 // A prime number used for the hash function

function rabinKarpSearch(text, pattern) {
  const patternLength = pattern.length
  const textLength = text.length
  const hashPattern = hash(pattern, patternLength)
  const hashText = []
  const indices = []

  // Calculate the hash of the first substring in the text
  hashText[0] = hash(text, patternLength)

  // Precompute BASE^(patternLength-1) % MOD
  const basePow = Math.pow(BASE, patternLength - 1) % MOD

  for (let i = 1; i <= textLength - patternLength + 1; i++) {
    // Update the rolling hash by removing the first character
    // and adding the next character in the text
    hashText[i] =
      (BASE * (hashText[i - 1] - text.charCodeAt(i - 1) * basePow) +
        text.charCodeAt(i + patternLength - 1)) %
      MOD

    // In case of hash collision, check character by character
    if (hashText[i] < 0) {
      hashText[i] += MOD
    }

    // Check if the hashes match and perform a character-wise comparison
    if (hashText[i] === hashPattern) {
      if (text.substring(i, i + patternLength) === pattern) {
        indices.push(i) // Store the index where the pattern is found
      }
    }
  }

  return indices
}

function hash(str, length) {
  let hashValue = 0
  for (let i = 0; i < length; i++) {
    hashValue = (hashValue * BASE + str.charCodeAt(i)) % MOD
  }
  return hashValue
}

export { rabinKarpSearch }
