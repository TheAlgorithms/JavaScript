/**
 * @description Return spiral matrix.
 * @param {Number} total number of row and column.
 * @returns {Array [Number][]}
 */
function spiralMatrix(N) {
    const result = []
  
    for (let i = 0; i < N; i++) {
      result.push(new Array(N).fill(null))
    }
  
    let top = 0,
      level = 0
    let count = 1
  
    while (true) {
      result[level][top] = count
  
      const upLevel = result[level - 1],
        bottomLevel = result[level + 1],
        leftLevel = result[level],
        rightLevel = result[level]
  
      const up = upLevel ? upLevel[top] : undefined
      const bottom = bottomLevel ? bottomLevel[top] : undefined
      const left = leftLevel ? leftLevel[top - 1] : undefined
      const right = rightLevel ? rightLevel[top + 1] : undefined
  
      if (right === null && up !== null) {
        top++
      } else if (right === null && up === null) {
        level--
      } else if (right !== null && bottom === null) {
        level++
      } else if (right !== null && bottom !== null && left === null) {
        top--
      } else if (right !== null && bottom !== null && up === null) {
        level--
      } else {
        break
      }
  
      count++
    }
  
    return result
}
  
module.exports = spiralMatrix;
