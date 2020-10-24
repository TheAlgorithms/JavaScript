/*
  Given a string of words or phrases, count the number of vowels.
  Example: input = "hello world" return 3
 */

const checkVowels = (value) => {
  // firts check if the input value is string
  if (typeof value === 'string') {
    // next create a regex(regular expression) that says everthing except aeiou,spaces,digits and expresions
    // we also use global and ignore case flag
    const regEx = /[^aeiou\s\W\d]/gi
    // then we return the length of matched letter which is vowels using str.match(regex)
    return value.match(regEx).length
  }
  // if the input value is not a string return this
  return 'not a string'
}

export { checkVowels }
