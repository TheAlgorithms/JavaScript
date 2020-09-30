// Author: Ray Wang https://github.com/rayw000
// This file is a JavaScript implementation of KMP string search algorithm using PMT (Partial Match Table).
// This algorithm accepts two strings, known as pattern and text, and search for the pattern within the text in complexity of O(n+k),
// where n is the length of the text and k is the length of the pattern.
// This algorithm returns an array, which contains indexes of every match.

const search = (text, pattern) => {
  if (typeof text !== 'string') {
    throw new Error('argument <text> is not a string')
  }
  if (typeof pattern !== 'string') {
    throw new Error('argument <pattern> is not a string')
  }
  let i = 0
  let j = 0
  const positions = []
  const table = makePartialMatchTable(pattern)
  while (i < text.length) {
    if (text[i] === pattern[j]) {
      // current two chars are the same,
      // move cursors i and j forward and continue
      i += 1
      j += 1
      if (j === pattern.length) {
        // Reaching the end of the pattern means we get a match.
        // Save it into the result array
        positions.push(i - j)
        // And reset cursor j, skip chars we have known matched, start a new comparison.
        j = table[j]
      }
    } else {
      // Failure occurred, start a new comparison, skip chars we have already known matched.
      j = table[j]
      // j < 0 means we need to start a totally fresh comparison from the next char in the text.
      if (j < 0) {
        i += 1
        j = 0
      }
    }
  }
  return positions
}

const makePartialMatchTable = (pattern) => {
  if (typeof pattern !== 'string') {
    throw new Error('argument <pattern> is not a string')
  }

  let pos1 = 0
  let pos2 = -1
  const T = new Array(pattern.length + 1).fill(-1)

  while (pos1 < pattern.length) {
    // need to reset to the very beginning and start a new comparison
    if (pos2 < 0) {
      pos1 += 1
      pos2 = 0
      T[pos1] = pos2
      continue
    }
    // chars matched, move forward, record partial match substring length into each cell.
    if (pattern[pos1] === pattern[pos2]) {
      pos1 += 1
      pos2 += 1
      T[pos1] = pos2
      continue
    }
    // Failure occurred, means we have pos2 chars matched before,
    // so we just need to restart comparison from pos2 rather than 0.
    pos2 = T[pos2]
  }
  return T
}

const main = () => {
  const text = 'ABAACABAACABAADABAACABAABAACABAADAA'
  const pattern = 'ABAACABAAD'
  console.log(makePartialMatchTable(pattern))
  console.log(search(text, pattern))
}

main()
