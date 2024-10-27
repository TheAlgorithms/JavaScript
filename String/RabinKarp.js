/**
 * Rabin-Karp algorithm for finding all occurrences of a pattern in a text.
 * It uses hashing to efficiently find substrings.
 * For More https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm
 *
 * Time Complexity:
 * - Average: O(n + m)
 * - Worst: O(n * m) due to potential hash collisions.
 *
 * Space Complexity: O(1) - only uses a fixed number of variables.
 *
 * @param {string} haystack - The text to search within.
 * @param {string} needle - The substring to search for.
 * @returns {number[]} - An array containing the starting indices of matches.
 * @throws {RangeError} - If either input is an empty string.
 *
 * @example:
 * const text = "abracadabra";
 * const pattern = "abra";
 * const result = rabinKarp(text, pattern);
 * console.log(result); // Output: [0, 7]
 *
 * Explanation:
 * The pattern "abra" occurs at index 0 and index 7 in the text "abracadabra".
 *
 * Here's how the algorithm works:
 * 1. It computes the hash of the pattern and the hash of the first window of the text.
 * 2. If the hashes match, it performs a character-by-character comparison to confirm a match.
 * 3. The algorithm then slides over the text, recalculating the hash for each new window.
 * 4. It continues until it has checked all possible windows in the text.
 */
export function rabinKarp(haystack, needle) {
  if (!haystack || !needle) {
    throw new RangeError('Input text and pattern cannot be empty.')
  }

  const base = 256 // Character set size (extended ASCII)
  const prime = 101 // Prime number for hash computation
  const needleLength = needle.length
  const haystackLength = haystack.length
  const matches = []

  let needleHash = 0 // Hash value for the pattern
  let haystackHash = 0 // Hash value for the current window in the text
  let hashMultiplier = 1

  // Calculate the multiplier used for the leading character in the hash
  for (let i = 0; i < needleLength - 1; i++) {
    hashMultiplier = (hashMultiplier * base) % prime
  }

  // Calculate the initial hash values for the pattern and the first window of the text
  for (let i = 0; i < needleLength; i++) {
    needleHash = (base * needleHash + needle.charCodeAt(i)) % prime
    haystackHash = (base * haystackHash + haystack.charCodeAt(i)) % prime
  }

  // Slide over the text to check for matches
  for (let i = 0; i <= haystackLength - needleLength; i++) {
    // If the hash values match, check for character by character equality
    if (needleHash === haystackHash) {
      let j
      for (j = 0; j < needleLength; j++) {
        if (haystack[i + j] !== needle[j]) {
          break
        }
      }
      if (j === needleLength) {
        matches.push(i) // Pattern found, add index to results
      }
    }

    // Calculate the hash value for the next window
    if (i < haystackLength - needleLength) {
      haystackHash =
        (base * (haystackHash - haystack.charCodeAt(i) * hashMultiplier) +
          haystack.charCodeAt(i + needleLength)) %
        prime

      // Ensure the hash value is non-negative
      if (haystackHash < 0) {
        haystackHash += prime
      }
    }
  }

  return matches
}
