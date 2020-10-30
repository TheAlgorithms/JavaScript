/*
*  Doctests
*
* > reverseWords('I Love JS')
*  'JS Love I'
* > reverseWords('Hello World')
*  'World Hello'
* > reverseWords('The Algorithms Javascript')
*  'Javascript Algorithms The'
* > reverseWords([])
*  ! TypeError
* > reverseWords({})
*  ! TypeError
* > reverseWords(null)
*  ! TypeError
*/
const reverseWords = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('The given value is not a string')
  }
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

export { reverseWords }
