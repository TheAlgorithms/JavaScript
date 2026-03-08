function railFenceCipher(text, rails) {
  if (rails <= 1) return text

  const fence = Array.from({ length: rails }, () => [])
  let rail = 0
  let direction = 1

  for (const char of text) {
    fence[rail].push(char)
    rail += direction

    if (rail === 0 || rail === rails - 1) {
      direction *= -1
    }
  }

  return fence.flat().join('')
}

module.exports = railFenceCipher
