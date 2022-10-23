/**
 * Problem 22 - Names scores
 * @see {@link https://projecteuler.net/problem=22}
 *
 * Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over
 * five-thousand first names, begin by sorting it into alphabetical order. Then working out the
 * alphabetical value for each name, multiply this value by its alphabetical position in the list to
 * obtain a name score.
 *
 * For example, when the list is sorted into alphabetical order, COLIN,
 * which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list.
 * So, COLIN would obtain a score of 938 × 53 = 49714.
 *
 * What is the total of all the name scores in the file?
 */

export function namesScores (namesTxt) {
  namesTxt = namesTxt.replaceAll('"', '')
  const names = namesTxt.split(',')

  names.sort((a, b) => (a > b) - (a < b))

  let totalSum = 0
  for (let i = 0; i < names.length; i++) {
    let nameSum = 0
    for (let j = names[i].length; j--;) {
      nameSum += names[i].charCodeAt(j) - 64
    }

    totalSum += nameSum * (i + 1)
  }

  return totalSum
}
