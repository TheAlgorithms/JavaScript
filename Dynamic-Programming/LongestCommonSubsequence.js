/**
 * A Dynamic Programming based solution for calculation of the Longest Common Subsequence Problem
 * https://en.wikipedia.org/wiki/Longest_common_subsequence_problem
 */

function getLCS (str1, str2) {
  // At least one string is null
  if (str1 == null || str2 == null) { return null }

  // At least one string is empty
  if (str1.length === 0 || str2.length === 0) { return '' }

  var arr1 = str1.split('')
  var arr2 = str2.split('')

  // lcsMatrix[i][j]  = LCS of first i elements of arr1 and first j characters of arr2
  const lcsMatrix = new Array(arr1.length + 1)
  for (let i = 0; i < arr1.length + 1; i++) {
    lcsMatrix[i] = new Array(arr2.length + 1)
  }

  for (let i = 0; i < arr1.length + 1; i++) { lcsMatrix[i][0] = 0 }
  for (let j = 1; j < arr2.length + 1; j++) { lcsMatrix[0][j] = 0 }
  for (let i = 1; i < arr1.length + 1; i++) {
    for (let j = 1; j < arr2.length + 1; j++) {
      if (arr1[i - 1] === (arr2[j - 1])) {
        lcsMatrix[i][j] = lcsMatrix[i - 1][j - 1] + 1
      } else {
        lcsMatrix[i][j] = lcsMatrix[i - 1][j] > lcsMatrix[i][j - 1] ? lcsMatrix[i - 1][j] : lcsMatrix[i][j - 1]
      }
    }
  }
  return lcsString(str1, str2, lcsMatrix)
}

function lcsString (str1, str2, lcsMatrix) {
  var lcs = ''
  var i = str1.length
  var j = str2.length
  while (i > 0 && j > 0) {
    if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
      lcs = lcs.concat(str1.charAt(i - 1))
      i--
      j--
    } else if (lcsMatrix[i - 1][j] > lcsMatrix[i][j - 1]) { i-- } else { j-- }
  }
  return lcs.split('').reverse().join('')
}

function main () {
  const str1 = 'FBANEYFAABEANYF'
  const str2 = 'FENVYKSFDDBE'
  const lcs = getLCS(str1, str2)

  // Print Longest Common Subsequence of the 2 strings given
  if (lcs != null) {
    console.log('String 1: ' + str1)
    console.log('String 2: ' + str2)
    console.log('Longest Common Subsequence: ' + lcs)
    console.log('Longest Common Subsequene length: ' + lcs.length)
  }
}

main()
