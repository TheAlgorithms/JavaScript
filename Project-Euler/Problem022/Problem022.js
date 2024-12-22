/*
Names Scores

Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.
For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 * 53 = 49714.
What is the total of all the name scores in the file?
*/
import fs from 'fs'

export const getAlphabeticalValue = (name) => {
  return [...name].reduce(
    (sum, char) => sum + (char.charCodeAt(0) - 'A'.charCodeAt(0) + 1),
    0
  )
}

export const calculateTotalNameScore = (filePath) => {
  return new Promise((resolve) => {
    fs.readFile(filePath, 'utf8', (_, data) => {
      const names = data.replace(/"/g, '').split(',').sort()

      const totalScore = names.reduce((total, name, index) => {
        const alphabeticalValue = getAlphabeticalValue(name)
        const nameScore = alphabeticalValue * (index + 1)
        return total + nameScore
      }, 0)

      resolve(totalScore)
    })
  })
}
