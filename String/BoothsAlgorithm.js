/**
 * Booth's Algorithm finds the lexicographically minimal rotation of a string.
 * Time Complexity: O(n) - Linear time where n is the length of input string
 * Space Complexity: O(n) - Linear space for failure function array
 * For More Visit - https://en.wikipedia.org/wiki/Booth%27s_multiplication_algorithm
 * @example
 * Input: "baca"
 * All possible rotations:
 * - "baca"
 * - "acab"
 * - "caba"
 * - "abac"
 * Output: "abac" (lexicographically smallest)
 *
 * How it works:
 * 1. Doubles the input string to handle all rotations
 * 2. Uses failure function (similar to KMP) to find minimal rotation
 * 3. Maintains a pointer to the start of minimal rotation found so far
 * @param {string} str - Input string to find minimal rotation
 * @returns {string} - Lexicographically minimal rotation of the input string
 * @throws {Error} - If input is not a string or is empty
 */
export function findMinimalRotation(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string')
  }

  if (str.length === 0) {
    throw new Error('Input string cannot be empty')
  }

  // Double the string for rotation comparison
  // This allows us to check all rotations by just sliding a window
  const s = str + str
  const n = s.length

  // Initialize failure function array
  const f = new Array(n).fill(-1)
  let k = 0 // Starting position of minimal rotation

  //Algorithm's implementation
  // Iterate through the doubled string
  // j is the current position we're examining
  for (let j = 1; j < n; j++) {
    // i is the length of the matched prefix in the current candidate
    // Get the failure function value for the previous position
    let i = f[j - k - 1]
    // This loop handles the case when we need to update our current minimal rotation
    // It compares characters and finds if there's a better (lexicographically smaller) rotation
    while (i !== -1 && s[j] !== s[k + i + 1]) {
      // If we find a smaller character, we've found a better rotation
      // Update k to the new starting position
      if (s[j] < s[k + i + 1]) {
        // j-i-1 gives us the starting position of the new minimal rotation
        k = j - i - 1
      }
      // Update i using the failure function to try shorter prefixes
      i = f[i]
    }

    // This block updates the failure function and handles new character comparisons
    if (i === -1 && s[j] !== s[k + i + 1]) {
      // If current character is smaller, update the minimal rotation start
      if (s[j] < s[k + i + 1]) {
        k = j
      }
      //If no match found,mark failure function accordingly
      f[j - k] = -1
    } else {
      //If match found, extend the matched length
      f[j - k] = i + 1
    }
  }
  // After finding k (the starting position of minimal rotation):
  // 1. slice(k): Take substring from position k to end
  // 2. slice(0, k): Take substring from start to position k
  // 3. Concatenate them to get the minimal rotation
  return str.slice(k) + str.slice(0, k)
}
