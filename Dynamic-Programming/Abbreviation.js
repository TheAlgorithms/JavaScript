/**
 * @description
 * Given two strings, `source` and `target`, determine if it's possible to make `source` equal
 * to `target` You can perform the following operations on the string `source`:
 * 1. Capitalize zero or more of `source`'s lowercase letters.
 * 2. Delete all the remaining lowercase letters in `source`.
 *
 * Time Complexity: (O(|source|*|target|)) where `|source|` => length of string `source`
 *
 * @param {String} source - The string to be transformed.
 * @param {String} target - The string we want to transform `source` into.
 * @returns {Boolean} - Whether the transformation is possible.
 * @see https://www.hackerrank.com/challenges/abbr/problem - Related problem on HackerRank.
 */
export const isAbbreviation = (source, target) => {
  const sourceLength = source.length
  const targetLength = target.length

  // Initialize a table to keep track of possible abbreviations
  let canAbbreviate = Array.from({ length: sourceLength + 1 }, () =>
    Array(targetLength + 1).fill(false)
  )
  // Empty strings are trivially abbreviatable
  canAbbreviate[0][0] = true

  for (let sourceIndex = 0; sourceIndex < sourceLength; sourceIndex++) {
    for (let targetIndex = 0; targetIndex <= targetLength; targetIndex++) {
      if (canAbbreviate[sourceIndex][targetIndex]) {
        // If characters at the current position are equal, move to the next position in both strings.
        if (
          targetIndex < targetLength &&
          source[sourceIndex].toUpperCase() === target[targetIndex]
        ) {
          canAbbreviate[sourceIndex + 1][targetIndex + 1] = true
        }
        // If the current character in `source` is lowercase, explore two possibilities:
        // a) Capitalize it (which is akin to "using" it in `source` to match `target`), or
        // b) Skip it (effectively deleting it from `source`).
        if (source[sourceIndex] === source[sourceIndex].toLowerCase()) {
          canAbbreviate[sourceIndex + 1][targetIndex] = true
        }
      }
    }
  }

  return canAbbreviate[sourceLength][targetLength]
}
