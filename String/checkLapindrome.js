
/*
  author:IndianBlitz
    This script will check Lapindrome
*/
// Check for checkLapindrome
function checkLapindrome (str) {
    const mid = Math.floor(str.length / 2)
    let i = 0
    let j = mid
    const part1 = str.slice(i, j).split('').sort().join('')
    let part2
  
    if ((str.length & 1) === 0) {
      part2 = str.slice(j, str.length).split('').sort().join('')
      str = part1 + part2
      while (i < mid && j < str.length) {
        if (str[i] !== str[j]) {
          return 'NO'
        };
  
        i++
        j++
      }
    } else {
      i = 0
      j = mid + 1
      part2 = str.slice(j, str.length).split('').sort().join('')
      str = part1 + str[mid] + part2
      while (i < mid && j < str.length) {
        if (str[i] !== str[j]) {
          return 'NO'
        };
        i++
        j++
      }
    }
    return 'YES'
  }
export { checkLapindrome }
