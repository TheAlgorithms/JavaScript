/*
    author: hasib787
 */

//Count the number of words in a string

const countWords = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (char == ' ' && str[i - 1] != ' ') {
      count++;
    }
  }
  count++;
  return count;
}
// console.log(countWords('I am hardworking. I am serious. I am sure I will do it'))
