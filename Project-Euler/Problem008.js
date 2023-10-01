// Problem: https://projecteuler.net/problem=8

const largestAdjacentNumber = (grid, consecutive) => {
  grid = grid.split('\n').join('')
  const splitGrid = grid.split('\n')
  let largestProd = 0

  for (const row in splitGrid) {
    const currentRow = splitGrid[row].split('').map((x) => Number(x))

    for (let i = 0; i < currentRow.length - consecutive; i++) {
      const combine = currentRow.slice(i, i + consecutive)

      if (!combine.includes(0)) {
        const product = combine.reduce(function (a, b) {
          return a * b
        })

        if (largestProd < product) largestProd = product
      }
    }
  }
  return largestProd
}

export { largestAdjacentNumber }
