/**
 * @function shuffle
 * @description Randomly shuffles the elements of an array using the
 *   Fisher-Yates (Knuth) shuffle algorithm.
 * @param {Array} arr - The input array to shuffle
 * @returns {Array} - A new shuffled array
 * @see https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * @example shuffle([1, 2, 3, 4, 5]) => [3, 1, 5, 2, 4] (random order)
 */
const shuffle = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Input must be an array')
  }
  const result = [...arr]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

export { shuffle }
