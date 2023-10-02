/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  let subStr = ""
  let subStrLen = 0
  
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= 1; j++) {
      let left = i
      let right = i + j
  
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        let len = right - left + 1
  
        if (len > subStrLen) {
          subStr = s.substring(left, right + 1)
          subStrLen = len
        }
  
        left--
        right++
      }
    }
  }
  
  return subStr
}

export { longestPalindrome }
