const reverseWords = (str) => {
  // Split string into words
  // Ex. "I Love JS" => ["I", "Love", "JS"]
  const words = str.split(' ')
  // reverse words
  // ["I", "Love", "JS"] => ["JS", "Love", "I"]
  const reversedWords = words.reverse()
  // join reversed words with space and return
  // ["JS", "Love", "I"] => "JS Love I"
  return reversedWords.join(' ')
}

// testing
console.log(reverseWords('I Love JS'))
console.log(reverseWords('My Name Is JavaScript'))
