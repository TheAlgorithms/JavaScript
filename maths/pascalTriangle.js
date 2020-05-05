const numRows = 5                                                                                                                                      

var generate = function (numRows) {
  const triangle = [[1], [1, 1]]

  if (numRows === 0) {
    return []
  } else if (numRows === 1) {
    return [[1]]
  } else if (numRows === 2) {
    return [[1], [1, 1]]
  } else {
    for (let i = 2; i < numRows; i++) {
      addRow(triangle)
    }
  }
  return triangle
}
var addRow = function (triangle) {
  const previous = triangle[triangle.length - 1]
  const newRow = [1]
  for (let i = 0; i < previous.length - 1; i++) {
    const current = previous[i]
    const next = previous[i + 1]
    newRow.push(current + next)
  }
  newRow.push(1)
  return triangle.push(newRow)
}

generate(numRows)
