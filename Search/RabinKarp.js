function hash(str, length) {
  let hashValue = 0
  for (let i = 0; i < length; i++) {
    hashValue = (hashValue * 256 + str.charCodeAt(i)) % 997
  }
  return hashValue
}

function rabinKarpSearch(text, pattern) {
  const BASE = 256 // The number of characters in the alphabet
  const MOD = 997 // A prime number used for the hash function
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

  return indices.length > 0 ? indices : [-1] // Return an array of indices where the pattern is found or [-1] if not found
}

// Example usage:
const result = rabinKarpSearch('ABABDABACDABABCABAB', 'DAB')
console.log('Pattern found at indices:', result)

export { rabinKarpSearch }
